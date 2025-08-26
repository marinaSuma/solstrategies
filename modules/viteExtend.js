import fs from 'fs';
import path from 'path';
import { defineNuxtModule } from 'nuxt/kit';

const jsonFilePath = path.resolve('config/variables.json');
const scssDirPath = path.resolve('app/assets/styles/helpers');
const scssDirPathOutside = path.resolve('app/assets/styles');
const scssFilePath = path.join(scssDirPath, '_variables.scss');
const mixinsFilePath = path.join(scssDirPath, '_typography.scss');

function camelToKebab(string) {
  // Convert camelCase to kebab-case
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function kebabToCamel(string) {
  // Convert kebab-case to camelCase
  return string.replace(/(-\w)/g, (m) => m[1].toUpperCase());
}

// Helper function to parse values correctly
function parseValue(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return isNaN(Number(value)) ? value : Number(value);
}

function assignValue(obj, path, value) {
  const keys = path.split('-').map((part) => kebabToCamel(part));
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }
  // Assign the parsed value to the final key in the path
  current[keys[keys.length - 1]] = parseValue(value);
}

function updateScssFromJson() {
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  const newScssContent = [];

  function parseObject(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const formattedKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        parseObject(value, formattedKey);
      } else {
        // This should correctly append a hyphen and handle numeric keys
        newScssContent.push(`$${camelToKebab(formattedKey)}: ${value};`);
      }
    }
  }

  parseObject(jsonData);

  // Join the content and add a newline at the end
  const scssString = newScssContent.join('\n') + '\n';
  if (fs.existsSync(scssFilePath)) {
    const existingScssContent = fs.readFileSync(scssFilePath, 'utf-8');
    if (existingScssContent === scssString) {
      return; // No change in content, no need to write the file
    }
  }

  fs.writeFileSync(scssFilePath, scssString);
  console.log('SCSS variables file generated:', scssFilePath);
}

function updateJsonFromScss() {
  const scssData = fs.readFileSync(scssFilePath, 'utf-8');
  const regex = /\$([\w-]+):\s*([^;]+);/g;
  let match;
  const newJsonData = {};

  while ((match = regex.exec(scssData)) !== null) {
    const keyPath = match[1];
    const value = match[2].trim();
    assignValue(newJsonData, keyPath, value);
  }

  // Add an extra newline at the end
  const newJsonContent = JSON.stringify(newJsonData, null, 2) + '\n';
  if (fs.existsSync(jsonFilePath)) {
    const existingJsonContent = fs.readFileSync(jsonFilePath, 'utf-8');
    if (existingJsonContent === newJsonContent) {
      return; // No change in content, no need to write the file
    }
  }

  fs.writeFileSync(jsonFilePath, newJsonContent);
  console.log('JSON variables file generated:', jsonFilePath);
}

function generateMixinsFromJson() {
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  const fontData = jsonData.font || {};
  const colorData = jsonData.color || {};
  let mixinsContent = "@use 'variables' as var;\n@use 'functions' as fn;\n@use 'mixins' as mx;\n\n";
  let classContent = "/*! purgecss start ignore */\n\n@use './helpers/typography' as mxt;\n\n"; // Add @use statement at the top of class content
  let colorClassContent = '';

  Object.entries(fontData).forEach(([key, value], index, array) => {
    if (key === 'family') return; // Skip 'family' if not desired in mixins

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      let mixinName = `font-${key}`;
      mixinsContent += `@mixin ${mixinName}(\n`;

      // Map over the properties to create parameter list, handling comma placement
      const params = Object.entries(value)
        .map(([propKey], i, arr) => {
          // Add a comma at the end except for the last parameter
          const comma = i < arr.length - 1 ? ',' : '';
          return `  $${propKey}: var.$${mixinName}-${propKey}${comma}`;
        })
        .join('\n');

      mixinsContent += `${params}\n) {\n`;
      mixinsContent += `  font-family: $family;\n  font-size: fn.toVw($size);\n  font-weight: $weight;\n`;
      mixinsContent += `  line-height: if($line == normal, normal, calc(#{$line} / #{$size}));\n`;
      mixinsContent += `  text-transform: $transform;\n`;
      mixinsContent += `  letter-spacing: if($letter != null, fn.toEm($letter, $size), null);\n`;

      mixinsContent += `\n  @if $sizem {\n    @include mx.mobile {\n      font-size: fn.toVw($sizem);\n    }\n  }\n`;
      mixinsContent += `}\n`;

      // Generate utility class for the mixin and add prefix 'mxt.'
      classContent += `.font-${key} {\n  @include mxt.${mixinName};\n}`;

      // Check if it's the last item
      if (index < array.length - 1) {
        mixinsContent += '\n';
        classContent += '\n\n'; // Double newline for spacing between class definitions
      } else {
        classContent += '\n'; // Single newline for the last item
      }
    }
  });

  // Generate color classes
  Object.entries(colorData).forEach(([key, value], index, array) => {
    colorClassContent += `.color-${key} {\n  color: ${value};\n}\n\n`;
    colorClassContent += `.bg-${key} {\n  background-color: ${value};\n}`;

    // Add a newline if it's not the last item
    if (index < array.length - 1) {
      colorClassContent += '\n\n';
    } else {
      // Ensure only one newline at the end of the file
      colorClassContent += '\n';
    }
  });

  // Write the mixins to their file
  if (fs.existsSync(mixinsFilePath)) {
    const existingMixinsContent = fs.readFileSync(mixinsFilePath, 'utf-8');
    if (existingMixinsContent !== mixinsContent) {
      fs.writeFileSync(mixinsFilePath, mixinsContent);
      console.log('Mixins file updated:', mixinsFilePath);
    }
  } else {
    fs.writeFileSync(mixinsFilePath, mixinsContent);
    console.log('Mixins file generated:', mixinsFilePath);
  }

  // Write to the class file if necessary
  const fontsClassFilePath = path.join(scssDirPathOutside, '_fontsclass.scss');
  if (fs.existsSync(fontsClassFilePath)) {
    const existingClassContent = fs.readFileSync(fontsClassFilePath, 'utf-8');
    if (existingClassContent !== classContent) {
      fs.writeFileSync(fontsClassFilePath, `${classContent}\n/*! purgecss end ignore */\n`);
      console.log('Fonts class file updated:', fontsClassFilePath);
    }
  } else {
    fs.writeFileSync(fontsClassFilePath, `${classContent}\n/*! purgecss end ignore */\n`);
    console.log('Fonts class file generated:', fontsClassFilePath);
  }

  // Write to the class file if necessary
  const colorsClassFilePath = path.join(scssDirPathOutside, '_colorsclass.scss');
  if (fs.existsSync(colorsClassFilePath)) {
    const existingClassContent = fs.readFileSync(colorsClassFilePath, 'utf-8');
    if (existingClassContent !== colorClassContent) {
      fs.writeFileSync(colorsClassFilePath, colorClassContent);
      console.log('Colors class file updated:', colorsClassFilePath);
    }
  } else {
    fs.writeFileSync(colorsClassFilePath, colorClassContent);
    console.log('Colors class file generated:', colorsClassFilePath);
  }
}

function jsonToScssPlugin() {
  return {
    name: 'sync-json-scss',
    buildStart() {
      updateScssFromJson();
      updateJsonFromScss(); // Ensure sync
      generateMixinsFromJson(); // Generate mixins from JSON
    },
    configureServer(server) {
      server.watcher.add(jsonFilePath);
      server.watcher.add(scssFilePath);
      server.watcher.add(mixinsFilePath); // Ensure that the mixin file is also watched

      server.watcher.on('change', (changedPath) => {
        if (changedPath === jsonFilePath) {
          console.log('JSON file changed, updating SCSS variables and mixins...');
          updateScssFromJson();
          generateMixinsFromJson();
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        } else if (changedPath === scssFilePath) {
          console.log('SCSS file changed, updating JSON variables...');
          updateJsonFromScss();
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        }
      });
    },
  };
}

export default defineNuxtModule({
  hooks: {
    'vite:extendConfig'(config) {
      config.plugins.push(jsonToScssPlugin());
    },
  },
});

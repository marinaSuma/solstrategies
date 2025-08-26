import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read your reference JSON files
const referenceData = JSON.parse(fs.readFileSync(path.join(__dirname, 'config/seo.json'), 'utf8'));
const referenceVariable = JSON.parse(fs.readFileSync(path.join(__dirname, 'config/variables.json'), 'utf8'));

const toSnakeCase = (text) => {
  return text
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
};

// Create the manifest object using data from the reference files
const manifest = {
  name: referenceData.title || 'Your App Name',
  short_name: toSnakeCase(referenceData.title) || 'app',
  description: referenceData.description || 'App Description',
  start_url: '/',
  display: 'standalone',
  background_color: referenceVariable.color.background || '#ffffff',
  theme_color: referenceVariable.color.primary || '#000000',
  icons: [
    {
      src: 'pwa-64x64.png',
      sizes: '64x64',
      type: 'image/png',
    },
    {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};

// Write the manifest file
fs.writeFileSync(path.join(__dirname, 'public/manifest.webmanifest'), JSON.stringify(manifest, null, 2));

console.log('manifest.webmanifest has been generated.');

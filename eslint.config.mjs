import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  ignores: [
    'node_modules',
    'components.d.ts',
    'nuxt.d.ts',
    'dist',
    '.nuxt',
    '.vite',
    '.output',
    '**/public/**',
    '**/assets/**',
    '**/styles/**',
    '**/data/**',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }], // Enable the TypeScript-specific rule
    'no-console': 'off', // allow console.log in TypeScript files
    '@typescript-eslint/no-explicit-any': 'off', // allow any type
    'vue/require-default-prop': 'off',
  },
});

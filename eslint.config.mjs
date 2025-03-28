import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['node_modules/*.config.js'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.meteor },
    },
    plugins: {
      js,
      ...prettier.plugins,
    },
    extends: [js.configs.recommended],
    rules: {
      ...prettier.rules,
      /**
       * Custom rules here...
       */
      'sort-keys': 0,
      'prefer-const': 'error',
      'prefer-template': 'error', // String concatenation
    },
  },
]);

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import { flatConfigs } from 'eslint-plugin-import';

const jsConfig = js.configs.recommended;
const importer = flatConfigs.recommended;

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['node_modules/*.config.js'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.meteor },
    },
    extends: [
      /**
       * Plugins
       */
      jsConfig,
      prettier,
      importer,
    ],
    rules: {
      /**
       * Custom rules here...
       */
      'prefer-const': 'error',
      'prefer-template': 'error', // Proper string concatenation
      'import/newline-after-import': 'error',
      'import/first': 'error',
      // 'import/no-unresolved': 'off',
      'padding-line-between-statements': [
        'error',
        { 'blankLine': 'always', 'prev': 'function', 'next': '*' },
        { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
        { 'blankLine': 'always', 'prev': '*', 'next': 'multiline-const' },
        { 'blankLine': 'always', 'prev': 'multiline-const', 'next': '*' },
      ],
    },
  },
]);

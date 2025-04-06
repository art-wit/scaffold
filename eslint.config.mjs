import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import { flatConfigs } from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.mjs';

const jsConfig = js.configs.recommended;
const svelter = svelte.configs.recommended;
const importer = flatConfigs.recommended;

export default defineConfig([
  /**
   * Common JS rules
   * These rules are applied to all JS files.
   */
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
      importer,
    ],
    rules: {
      /**
       * Custom rules here...
       */
      'import/newline-after-import': 'error',
      'import/first': 'error',
      'import/no-unresolved': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'multiline-const' },
        { blankLine: 'always', prev: 'multiline-const', next: '*' },
      ],
    },
  },
  /**
   * Common Svelte rules
   * These rules are applied to all Svelte files.
   */
  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        // We recommend importing and specifying svelte.config.js.
        // By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
        // While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
        // explicitly specifying it ensures better compatibility and functionality.
        svelteConfig,
      },
    },
    plugins: {
      svelte,
    },
    extends: [svelter],
  },
  /**
   * Common rules
   */
  {
    extends: [prettier],
    rules: {
      'prefer-const': 'error',
      'prefer-template': 'error', // Proper string concatenation
    },
  },
]);

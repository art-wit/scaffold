import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    ignores: ["node_modules/*.config.js"],
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    plugins: {
      js,
    },
    extends: [
      js.configs.recommended, 
    ],
    rules: {
      semi: "error",
      "sort-keys": 0,
			"prefer-const": "error",
		},
  },
]);
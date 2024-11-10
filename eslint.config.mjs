import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    rules: {
      quotes: ["error", "single"],
      semi: ["error", "never"],
      indent: ["error", 2],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }
];

const typescriptOptions = require("@kobakazu0429/eslint-config-typescript");

module.exports = {
  ...typescriptOptions,
  plugins: [...typescriptOptions.plugins, "prettier-plugin-svelte"],
  extends: [
    ...typescriptOptions.extends,
    "plugin:svelte/recommended",
    "plugin:svelte/prettier",
  ],
  parserOptions: {
    ...typescriptOptions.parserOptions,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    ...typescriptOptions.rules,
    // for svelte
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
};

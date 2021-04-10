const typescriptOptions = require("@kobakazu0429/eslint-config-typescript");

module.exports = {
  ...typescriptOptions,
  plugins: [
    "svelte3",
    ...typescriptOptions.plugins,
  ],
  settings: {
    "svelte3/typescript": require("typescript"),
  },
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
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

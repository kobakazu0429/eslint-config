const typescriptOptions = require("../eslint-config-typescript");

module.exports = {
  ...typescriptOptions,
  extends: [
    ...typescriptOptions.extends,
    "prettier/react",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ...typescriptOptions.parserOptions,
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    ...typescriptOptions.plugins,
    "react",
  ],
  rules: {
    ...typescriptOptions.rules,
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx", "ts", "tsx"] }
    ],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off"
  }
};

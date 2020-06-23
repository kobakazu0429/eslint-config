const baseOptions = require("../eslint-config-base");

module.exports = {
  ...baseOptions,
  extends: [
    ...baseOptions.extends,
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    ...baseOptions.plugins,
    "@typescript-eslint"
  ],
  rules: {
    ...baseOptions.rules,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "constructor",
          "static-field",
          "public-static-field",
          "private-static-field",
          "protected-static-field",
          "public-static-method",
          "private-static-method",
          "protected-static-method",
          "static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "instance-field",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "instance-method"
        ]
      }
    ]
  }
};

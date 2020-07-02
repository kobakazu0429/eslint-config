module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "lines-between-class-members": "off",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
};

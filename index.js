module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "config/webpack.config.common.js"
      }
    }
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-console": "off",
    "lines-between-class-members": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
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
    ],
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx", "ts", "tsx"] }
    ],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off"
  }
}

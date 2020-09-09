# @kobakazu0429/eslint-config

## Usage

1. install eslint and eslint-config

```bash
yarn add -D eslint @kobakazu0429/eslint-config-base
yarn add -D eslint @kobakazu0429/eslint-config-typescript
yarn add -D eslint @kobakazu0429/eslint-config-typescript-react
```

2. create and edit `.eslintrc.js`.

```bash
$ touch .eslintrc.js
```

```bash
wget https://raw.githubusercontent.com/kobakazu0429/eslint-config/master/template.js -O .eslintrc.js
```

```javascript
module.exports = {
  extends: "@kobakazu0429/eslint-config-base",
  // extends: "@kobakazu0429/eslint-config-typescript",
  // extends: "@kobakazu0429/eslint-config-typescript-react",
};
```

## if using webpack

```bash
$ yarn add -D eslint-plugin-import eslint-import-resolver-webpack
```

```javascript
module.exports = {
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack.config.common.js",
      },
    },
  },
};
```

FYI: [eslint-plugin-import で TypeScript の import 問題を解決する - Qiita](https://qiita.com/paranishian/items/334d0f2d87f487dc65d6)

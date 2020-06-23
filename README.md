# @kobakazu0429/eslint-config

## Usage

install eslint and create `.eslintrc.js`.

```bash
$ yarn add -D eslint
$ touch .eslintrc.js
$ code .eslintrc.js
```

add below codes.

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

create `.eslintrc.js`

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

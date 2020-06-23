# @kobakazu0429/eslint-config

## if using webpack

```bash
$ yarn add -D eslint-import-resolver-webpack
```

create `.eslintrc.js`

```javascript
module.exports = {
  extends: "@kobakazu0429/eslint-config-**",
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

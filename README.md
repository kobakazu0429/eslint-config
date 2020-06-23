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

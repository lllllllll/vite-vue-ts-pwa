/* eslint-disable prettier-vue/prettier */
module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended', 'prettier'],
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false,
        script: false,
        style: false,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'ts' },
          comments: false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}

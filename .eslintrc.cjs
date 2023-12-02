module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //继承了一些预设的规则集，提供了一系列的规则配置，可以帮助你更好地检测和修复代码中的问题。
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [],
  parser: '@typescript-eslint/parser', //指定使用 @typescript-eslint/parser 解析器，以解析 TypeScript 代码。
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  //引入了一些插件,提供了额外的规则和功能，可以进一步增强 ESLint 的能力。
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  //定义了一些具体的规则配置。
  rules: {
    'prettier/prettier': 'error', //使用 Prettier 进行代码格式化，并将格式不一致的代码视为错误。
    //允许未使用的变量。
    '@typescript-eslint/no-unused-vars': 'off',
    //允许使用 any 类型。
    '@typescript-eslint/no-explicit-any': 'off',
    //允许使用 TypeScript 的注释语法。
    '@typescript-eslint/ban-ts-comment': 'off',
    //允许使用全局变量。
    'no-restricted-globals': 'off',
    //允许使用非空断言操作符（!）。
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'off',
  },
}

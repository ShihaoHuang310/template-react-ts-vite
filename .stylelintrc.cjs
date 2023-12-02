module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'], // 继承基本配置和Prettier插件的配置

  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'], // 加载自定义插件

  rules: {
    'color-hex-case': 'lower', // 颜色值使用小写字母
    'color-hex-length': 'long', // 颜色值使用长格式
    'font-family-name-quotes': 'always-where-recommended', // 字体名称使用引号
    'function-comma-newline-after': 'always-multi-line', // 多行函数逗号后面必须换行
    'function-comma-space-after': 'always-single-line', // 单行函数逗号后面必须空格
    'function-name-case': 'lower', // 函数名称使用小写字母
    'function-url-quotes': 'always', // 函数URL使用引号
    'max-nesting-depth': 3, // 最大嵌套深度为3
    'no-empty-source': true, // 不允许空的样式文件
    'order/properties-order': [], // CSS属性排序规则
    'property-no-unknown': [
      // 不允许未知属性
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-max-id': 0, // 不允许使用ID选择器
    'selector-pseudo-element-no-unknown': [
      // 不允许未知的伪元素
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-type-no-unknown': [
      // 不允许未知的元素类型选择器
      true,
      {
        ignoreTypes: ['/^v-/'],
      },
    ],
  },
}

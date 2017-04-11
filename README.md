# YFjs Compiled
前端组件库YFjs编译后的 CSS、JavaScript 和字体文件。包含压缩和未压缩两个目录，可酌情使用

## v0.8.1 更新说明: 

### 版本号

1. 当前组件库版本号为 `0.8.1`
2. 当前组件库内置的 SPA 框架的版本号为 `1.0.0-rc.1`

### 库更新

1. 加入了单元测试脚本。测试框架使用 Mocha (BDD)，断言库使用 should。
2. 为配合单元测试，调整了模块编译方式。加入了 `build.js` 和 `build.json` 用以处理模块的编译。
3. YFjs的核心库进行了调整，去除了默认加入的 `Modernizr`，支持自动测试并加入兼容脚本。

### 组件更新

1. 双列框选择组件 `jq/multiselect` 更名为 `jq/multipicker`，同时 jQuery 扩展名称由 `multiSelect` 更名为 `multiPicker`。因为 multiselect 名称概念易和 multiple 的 select 控件混淆
2. 加密解密工具库 `crypto-js` 更名为 `crypto`
3. 表格组件 dataTables 删除了 `dataTables-jui` 和 `dataTables-foundation` 相关样式。为了表格组件样式的统一设置。
4. 修复了引入图表组件 `echarts2/chart/wordCloud` 时依赖出错的问题。

### SPA 框架更新

1. 视图和布局的配置项 `styles` 更名为 `style`。为了与整体配置项风格一致。
2. 视图和布局实例的 `load` 方法增强：支持自动查找元素容器下引入（include）的子页面了。
3. 布局模板内的 `{{body}}` 写法更改为 `{{{body}}}`（由两个大括号更改为三个）。解决了无法向布局模板内传入自定义的 body 变量数据的问题。


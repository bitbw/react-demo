// ant4.0推荐配置

// package.json
// "start": "craco start",
// "build": "craco build",
// "test": "craco test",

// 缺点 还是需要引入 @import '~antd/dist/antd.less';
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

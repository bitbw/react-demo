// ant 3.0 推荐配置
// package.json
// "start": "react-app-rewired start",
// "build": "react-app-rewired build",
// "test": "react-app-rewired test",

// 优点：相比 4.0 配置 不用再单独引入样式 需要注意addLessLoader的使用 ，less需要6.0版本

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // // before
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" },
  // })
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#EE9CA7" },
    },
  })
);

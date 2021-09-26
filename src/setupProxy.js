const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use(
  //   proxy("/api1", {
  //     //遇见/api1前缀的请求，就会触发该代理配置
  //     target: "http://localhost:5000", //请求转发给谁
  //     // 控制服务器收到的请求头中Host的值
  //     // true 显示原始请求的 Host(主机) （也就是代理的服务部署的地址在脚手架中默认为 http://localhost:3000）, 
  //     // false 显示代理请求 Host(主机) （也就是target http://localhost:5000）  
  //     changeOrigin: false, 
  //     pathRewrite: { "^/api1": "" }, //重写请求路径(必须)
  //   }),
  //   proxy("/api2", {
  //     target: "http://localhost:5001",
  //     changeOrigin: true,
  //     pathRewrite: { "^/api2": "" },
  //   }),
  //   proxy("/api3", {
  //     target: "http://localhost:5003",
  //     changeOrigin: true,
  //     pathRewrite: { "^/api3": "" },
  //   })
  // );
};

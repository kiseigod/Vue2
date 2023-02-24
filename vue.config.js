const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查

  // 开启代理服务器  (方式一)
  // devServer: {
  //   proxy:'http://localhost:5000'
  // }

  // 开启代理服务器  (方式二,可以请求多个)
  // devServer: {
  //   proxy: {
  //     '/api': { //请求前缀
  //       target: '<url>',           //http://localhost:5000
  //       pathRewrite:{'^/api':''},  //重写路径
  //       ws: true,                  //用于支持websocket
  //       changeOrigin:true          //用于控制请求头中的host值
  //     }, 
  //     '/demo': { //请求前缀
  //       target: '<url>',            //http://localhost:5001
  //       pathRewrite:{'^/demo':''},  //重写路径
  //       ws: true,                  //用于支持websocket
  //       changeOrigin:true          //用于控制请求头中的host值
  //     }, 
  //   }
  // }
})
  

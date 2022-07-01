/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */
 console.log("enter into vue config ")
 module.exports = {
   // 配置转发代理
   devServer: {
     disableHostCheck: true,
     port: 8082,
     proxy: {
       '/': {
         target: "http://127.0.0.1:8081",
         ws: false, // 需要websocket 开启
         pathRewrite: {
           '^/': '/'
         }
       }
     }
   }
 }
 
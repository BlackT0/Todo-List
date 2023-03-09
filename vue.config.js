const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, /*关闭语法检查*/
  //开启代理服务器
  //第一种方法
  /*
  devServer:{
    proxy:'http://127.0.0.1:8888'
  },
  */
  //第二种方法
  devServer:{
    proxy: {
      '/stu': {
        target: 'http://127.0.0.1:8888',
      },
      '/car': {
        target: 'http://127.0.0.1:9999'
      }
    }
  }
})

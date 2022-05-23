const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: 'https://signin.bindid-sandbox.io/',
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }

})

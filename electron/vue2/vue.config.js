const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  outputDir: "./dist",
  configureWebpack:{

  },
  
})

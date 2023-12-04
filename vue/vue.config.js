const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/vue' : '/', // prvni je build a druhy je dev
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['daniel-sykora.cz']
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
});
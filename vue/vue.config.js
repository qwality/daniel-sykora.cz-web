const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/vue',
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['daniel-sykora.cz']
  },
});
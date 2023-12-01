const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: 'https://daniel-sykora.cz/vue',
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['daniel-sykora.cz']
  },
});
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    disableHostCheck: true, // nebo použijte allowedHosts pro konkrétní hostitele
    // allowedHosts: ['váš.domenový.název', 'další.povolený.host']
  }
});

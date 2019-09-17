module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  configureWebpack: config => {
  },
  devServer: {
    // 配置代理
    proxy: {
      '/': {
        ws: false,   // 禁用websocket
        target: '',
        changeOrigin: true,
      }
    }
  }
}

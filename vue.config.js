const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let { NODE_ENV } = process.env;
module.exports = {
  publicPath: NODE_ENV === 'production' ? 'Ts/dist/' : './',
  // publicPath: './',
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
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: true,
              drop_console: true, //注释console
              drop_debugger: true, //注释debugger
              pure_funcs: ['console.log'] //移除console
            }
          }
        })
      ]
    }
  },
  chainWebpack(config){
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    })
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

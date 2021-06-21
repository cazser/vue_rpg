// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const path = require('path')

module.exports = {
  mode: 'development',
   entry: './src/main.js', //打包文件入口
    output: {               //打包文件出口
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
        /*new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'  
        }),
        */
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}
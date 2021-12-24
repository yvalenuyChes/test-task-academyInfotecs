
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/js/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js')
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env'],
               }
            },
            
         }
      ]
   }
}
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  
  module: {
    loaders: [
	  {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015', 'react']
        }
      },
	  {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
	  {
		test: /\.(png|woff|woff2|svg|ttf|eot)$/,
		loader:'url-loader?limit=10000'
	  }
    ]
  },
  
  resolve: {
      extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: '计算器'
    })
  ]
};
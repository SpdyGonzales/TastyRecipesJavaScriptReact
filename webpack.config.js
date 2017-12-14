var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': ['./src/main.jsx']
	},
	output: {
		path: path.join(__dirname, 'www'),
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		rules: [
      		{ test: /\.jsx?$/, use: 'babel-loader' },
      		{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
      		{ test: /\.(jpg||png)$/, use: 'file-loader' }


		]
	},
	plugins: [
		new HtmlWebpackPlugin({  // Also generate a test.html
	      filename: 'index.html',
		  template: 'src/index.html',
		  excludeChunks: ['app']
    	})
	]
}

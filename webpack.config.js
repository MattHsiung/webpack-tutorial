var path = require('path');
var webpack = require('webpack');
module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		app:  './app/app.js',
		about: './about/about.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'src')
				// exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		stats: 'errors-only'
	}
};
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	// devtool: 'cheap-module-source-map',
	context: path.join(__dirname, 'src'),
	entry: {
		app:  './app/app.js',
		about: './about/about.js',
		vendor: ['jquery']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].bundle.js'
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
		stats: {
			colors: true,
			reasons: true,
			chunks: false,
			modules: false
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			hash: true,
			excludeChunks: ['about']
		}),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			hash: true,
			filename: 'about.html',
			excludeChunks: ['app']
		}),

		new CommonsChunkPlugin({
			name: ['commons', 'vendor', 'boostrap']
		})
	]
};
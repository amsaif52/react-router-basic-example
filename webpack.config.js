var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				exclude: /node_modules/,
				test: /\.js$/
			},
			{
				loader: "style-loader!css-loader",
				test: /\.css$/
			}
		]
	},
	plugins:[
				new webpack.optimize.UglifyJsPlugin({
					beautify: false,
					comments: false,
					compress: {
						warnings: false,
						drop_console: true
					},
					mangle:{
						except: ['$'],
						keep_fname: true
					}
		    	})
			]
};
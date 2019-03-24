const path = require('path')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.vue', '.css']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash].js',
		publicPath: '/dist/' // it says how to resolve path in script tags e.g/ /dist/my-bundle.js
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{ 
				test: /\.js$/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: /node_modules/ ,
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: 'file-loader'
			}
		]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = (env, argv) => {
	if (argv && argv.mode === 'production') {
		console.log(`We are in production. So let's minify`)
		config.devtool = 'source-map'
		config.optimization = {
			minimizer: [
				new TerserPlugin(), // minify js
				new OptimizeCSSAssetsPlugin() // minify css
			]
		}
	}

	return config
}

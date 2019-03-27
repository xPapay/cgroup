const path = require('path')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.vue', '.css']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash].js',
		publicPath: '/dist/'
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
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 
					'css-loader'
				]
			},
			{
				test: /\.sass$/,
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
					isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/images'
					}
				} 
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = (env, argv) => {
	const isProd = argv && argv.mode === 'production'
	if (isProd) {
		console.log(`We are in production. So let's minify`)
		config.devtool = 'source-map'
		config.optimization = {
			minimizer: [
				new TerserPlugin(), // minify js
				new OptimizeCSSAssetsPlugin() // minify css
			]
		},
		config.plugins.push(new MiniCssExtractPlugin({
			filename: isProd ? 'assets/css/[name].[hash].css' : 'assets/css/[name].css'
		}))
		config.module.rules.push({
			test: /\.(jpg|png|gif|svg)$/,
        	use: {
				loader: 'image-webpack-loader',
				options: {
					enforce: 'pre'
				}
			}
		})
	}

	return config
}

const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = {
	entry: './src/entry-client.js',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"client"'
		}),
		new VueSSRClientPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}

module.exports = (env, argv) => {
	if (!argv || argv.mode === 'development') {
		console.log(`We are in development so let's add hot HMR plugin`)
		config.plugins.push(new webpack.HotModuleReplacementPlugin())
		config.entry = ['webpack-hot-middleware/client', config.entry]
	}

	return merge(commonConfig(env, argv), config)
}


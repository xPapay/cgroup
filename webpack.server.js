const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = {
	entry: './src/entry-server.js',
	output: {
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	externals: nodeExternals({ whitelist: /\.css$/ }),
	plugins: [
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"server"'
			// it should set automatically NODE_ENV to development/production thanks to mode
		}),
		new VueSSRServerPlugin()
	]
}

module.exports = (env, argv) => {
	return merge(commonConfig(env, argv), config)
}

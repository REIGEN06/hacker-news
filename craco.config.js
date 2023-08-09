const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
	webpack: {
		alias: {
			'@components': resolvePath('./src/components'),
			'@ui': resolvePath('./src/ui'),
			'@api': resolvePath('./src/api'),
			'@pages': resolvePath('./src/pages'),
			'@const': resolvePath('./src/utils/const'),
			'@functions': resolvePath('./src/utils/functions'),
			'@actions': resolvePath('./src/redux/actions'),
			'@reducers': resolvePath('./src/redux/reducers'),
			'@redux': resolvePath('./src/redux'),
		},
		module: {
			rules: [
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
				},
			],
		},
	},
};

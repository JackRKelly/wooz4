/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: ['cdn.shopify.com'],
	},
	reactStrictMode: true,
	webpack: config => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader',
		});
		return config;
	},
	webpackDevMiddleware: config => {
		return config;
	},
};

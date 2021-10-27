module.exports = {
	client: {
		service: {
			name: 'shopify',
			url: 'https://wooz4.myshopify.com/api/2021-10/graphql.json',
			headers: {
				'X-Shopify-Storefront-Access-Token': 'a372aab299a287bb7c1aa9bb2eb0196b',
			},
		},
		excludes: ['**/node_modules/**/*'],
		includes: ['**/*.ts'],
	},
};

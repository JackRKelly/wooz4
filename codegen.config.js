const _ = require('lodash');
const path = require('path');

const schema = path.join(__dirname, 'src/graph/schema.gql');
const generated = path.join(__dirname, 'src/graph/generated.ts');
const documents = path.join(__dirname, 'src/graph/**/*.gql');

module.exports = {
	overwrite: true,
	generates: {
		[generated]: {
			schema,
			documents,
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-graphql-request',
			],
			config: {
				scalars: {
					DateTime: 'string',
					Decimal: 'string',
					HTML: 'string',
					Money: 'string',
					URL: 'string',
				},
			},
		},
	},
};

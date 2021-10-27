import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import React from 'react';

const uri = 'https://wooz4.myshopify.com/api/2021-10/graphql.json';
const token = 'a372aab299a287bb7c1aa9bb2eb0196b';
const httpLink = createHttpLink({
	uri,
});

const authLink = setContext(_ => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': token,
	},
	fetchOptions: {
		mode: 'cors',
	},
}));

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache({addTypename: false}),
});
interface Props {
	children: React.ReactNode;
}

export const Apollo: React.FC<Props> = ({children}: Props) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

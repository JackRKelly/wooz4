import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {gql, useQuery} from '@apollo/client';

interface ProductData {
	products: {
		edges: Product[];
	};
}

interface Product {
	node: {
		id: string;
		title: string;
		description: string;
		onlineStoreUrl: string;
		tags: string;
		handle: string;
		images: Image[];
		priceRange: PriceRange;
	};
}

interface Image {
	transformedSrc: string;
}

interface PriceRange {
	minVariantPrice: {
		amount: string;
		currencyCode: string;
	};
}

const GET_PRODUCT_INVENTORY = gql`
	query ProductInfo {
		products(first: 100) {
			edges {
				node {
					id
					title
					description
					onlineStoreUrl
					tags
					handle
					images(first: 1) {
						edges {
							node {
								transformedSrc
							}
						}
					}
					priceRange {
						minVariantPrice {
							amount
							currencyCode
						}
					}
				}
			}
		}
	}
`;

const Shop: NextPage = () => {
	const {data} = useQuery<ProductData>(GET_PRODUCT_INVENTORY);
	console.log(data);
	console.log(data?.products.edges[0].node.priceRange);

	return (
		<div>
			<Head>
				<title>{buildTitle('Shop', 'after')}</title>
				<meta name="description" content="All about Jack Kelly" />
			</Head>

			<ContentColumn>
				<h1>Shop Wooz4</h1>
			</ContentColumn>
		</div>
	);
};

export default Shop;

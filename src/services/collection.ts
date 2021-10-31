/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import formatTitle from 'title';
import {ShopifyService} from './shopify';

import * as ProductService from './product';

export interface Single {
	title: string;
	description: string;
	image: {
		id: string;
		src: string;
		alt: string;
	};
	products: ProductService.ListItem[];
}

export async function getSingle(handle: string): Promise<Single> {
	const {collectionByHandle} = await ShopifyService.getCollectionSingle({
		handle,
	});
	const {title, description, products, image} = collectionByHandle || {};

	const collection: Single = {
		title: title as string,
		description: description as string,
		image: {
			id: image?.id as string,
			src: image?.src as string,
			alt: image?.altText as string,
		},
		products: products?.edges.map(({node, cursor}) => ({
			id: node.id,
			cursor,
			url: `/products/${node.handle as string}`,
			title: formatTitle(node.title),
			description: node.description,
			image: {
				src: node.images.edges[0].node.transformedSrc,
				alt: node.images.edges[0].node.altText as string,
			},
			price: {
				amount: Number(node.priceRange.minVariantPrice.amount),
				currencyCode: node.priceRange.minVariantPrice.currencyCode,
			},
		})) as ProductService.ListItem[],
	};

	return collection;
}

// export interface ListItem {
// 	id: string;
// 	url: string;
// 	title: string;
// 	description: string;
// 	image: {
// 		src: string;
// 		alt: string;
// 	};
// 	price: {
// 		amount: number;
// 		currencyCode: CurrencyCode;
// 	};
// }

// export interface List {
// 	products: Array<Merge<ListItem, {cursor: string}>>;
// 	pageInfo: GetProductListQuery['products']['pageInfo'];
// }

// export async function getList(
// 	variables?: GetProductListQueryVariables,
// ): Promise<List> {
// 	const {
// 		products: {edges, pageInfo},
// 	} = await ShopifyService.getProductList(variables);

// 	const products: List['products'] = edges.map(({node, cursor}) => ({
// 		id: node.id,
// 		cursor,
// 		url: `/products/${node.handle}`,
// 		title: formatTitle(node.title),
// 		description: node.description,
// 		image: {
// 			src: node.images.edges[0].node.transformedSrc,
// 			alt: node.images.edges[0].node.altText ?? '',
// 		},
// 		price: {
// 			amount: Number(node.priceRange.minVariantPrice.amount),
// 			currencyCode: node.priceRange.minVariantPrice.currencyCode,
// 		},
// 	}));

// 	return {products, pageInfo};
// }

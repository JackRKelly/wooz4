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

// export async function getSingle(handle: string): Promise<Single> {
// 	const {collectionByHandle} = await ShopifyService.getCollectionSingle({
// 		handle,
// 	});
// 	const {title, description, image, products} = collectionByHandle || {};

// 	const collection: Single = {
// 		title: formatTitle(title),
// 		description: description,
// 		image: {
// 			id: products?.edges[0].node.images?.edges[0]?.node.id ?? '',
// 			alt: products?.edges[0].node.images?.edges[0]?.node.altText ?? '',
// 			src: products?.edges[0].node.images?.edges[0]?.node.transformedSrc ?? '',
// 		},
// 		products: products?.edges[Symbol].map(({node}) => ({
// 			title: node.title,
// 			description: node.description,
// 			seo: {
// 				title: node.title,
// 				description: node.description,
// 			},
// 		})),
// 	};

// 	return collection;
// }

// export interface Single {
// 	title: string;
// 	description: string;
// 	seo: {
// 		title: string;
// 		description: string;
// 	};
// 	images: Array<{
// 		id: string;
// 		src: string;
// 		alt: string;
// 	}>;
// 	variants: Array<{
// 		id: string;
// 		title: string;
// 		image?: string;
// 		price: {
// 			amount: number;
// 			currencyCode: CurrencyCode;
// 		};
// 	}>;
// }

// export async function getSingle(handle: string): Promise<Single> {
// 	const {productByHandle} = await ShopifyService.getProductSingle({handle});
// 	const {title, description, seo, images, variants} = productByHandle!;

// 	const product: Single = {
// 		title: formatTitle(title),
// 		description,
// 		seo: {
// 			title: formatTitle(seo.title ?? title),

// 			description: seo.description ?? truncate(description, {length: 256}),
// 		},
// 		images: images.edges.map(({node}) => ({
// 			id: node.id!,
// 			src: node.transformedSrc,
// 			alt: node.altText ?? '',
// 		})),
// 		variants: variants.edges.map(({node}) => {
// 			const variant: Single['variants'][0] = {
// 				id: node.id,
// 				title: node.title,
// 				image: node.image?.id ?? '',
// 				price: {
// 					amount: Number(node.priceV2.amount),
// 					currencyCode: node.priceV2.currencyCode,
// 				},
// 			};

// 			return variant;
// 		}),
// 	};

// 	return product;
// }

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

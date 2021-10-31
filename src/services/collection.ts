/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import formatTitle from 'title';
import {
	GetCollectionProductsQueryVariables,
	GetProductListQuery,
	ShopifyService,
} from './shopify';
import {ProductList} from './product';

export interface SingleCollection {
	title: string;
	description: string;
	image: {
		id: string;
		src: string;
		alt: string;
	};
}

export async function getSingleCollection(
	handle: string,
): Promise<SingleCollection> {
	const {collectionByHandle} = await ShopifyService.getCollectionSingle({
		handle,
	});
	const {title, description, image} = collectionByHandle ?? {};

	const {id: imageId, src: imageSrc, altText: imgAltText} = image ?? {};

	const collection: SingleCollection = {
		title: title!,
		description: description!,
		image: {
			id: imageId!,
			src: imageSrc!,
			alt: imgAltText!,
		},
	};

	return collection;
}

export async function getCollectionProducts(
	variables: GetCollectionProductsQueryVariables,
): Promise<ProductList> {
	const {collectionByHandle} = await ShopifyService.getCollectionProducts(
		variables,
	);

	const {products} = collectionByHandle ?? {};

	const collectionProducts: ProductList['products'] = products?.edges.map(
		({node, cursor}) => ({
			id: node.id,
			cursor,
			url: `/products/${node.handle}`,
			title: formatTitle(node.title),
			description: node.description,
			image: {
				src: node.images.edges[0].node.transformedSrc,
				alt: node.images.edges[0].node.altText,
			},
			price: {
				amount: Number(node.priceRange.minVariantPrice.amount),
				currencyCode: node.priceRange.minVariantPrice.currencyCode,
			},
		}),
	) as ProductList['products'];

	return {
		products: collectionProducts,
		pageInfo: products?.pageInfo as GetProductListQuery['products']['pageInfo'],
	};
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

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import formatTitle from 'title';
import {
	GetCollectionListQueryVariables,
	GetCollectionProductsQueryVariables,
	GetProductListQuery,
	ShopifyService,
} from './shopify';
import {ProductList} from './product';
import {Merge} from 'type-fest';

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

export interface CollectionListItem {
	id: string;
	title: string;
	description: string;
	image: {
		src: string;
	};
	handle: string;
}

export interface CollectionList {
	collections: Array<Merge<CollectionListItem, {cursor: string}>>;
	pageInfo: GetProductListQuery['products']['pageInfo'];
}

export async function getCollectionList(
	variables?: GetCollectionListQueryVariables,
): Promise<CollectionList> {
	const {
		collections: {edges, pageInfo},
	} = await ShopifyService.getCollectionList(variables);

	const collections: CollectionList['collections'] = edges.map(
		({node, cursor}) => ({
			id: node.id,
			title: node.title,
			description: node.description,
			image: {
				src: node.image?.transformedSrc ?? '',
			},
			handle: node.handle,
			cursor,
		}),
	);

	return {collections, pageInfo};
}

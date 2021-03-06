import formatTitle from 'title';
import {Merge} from 'type-fest';
import truncate from 'lodash/truncate';
import {
	ShopifyService,
	GetProductListQuery,
	GetProductListQueryVariables,
	CurrencyCode,
} from './shopify';

export interface SingleProduct {
	title: string;
	description: string;
	descriptionHtml: string;
	outOfStock: boolean;
	tags: string[];
	seo: {
		title: string;
		description: string;
	};
	images: Array<{
		id: string;
		src: string;
		alt: string;
	}>;
	variants: Array<{
		outOfStock: boolean;
		id: string;
		title: string;
		image?: string;
		price: {
			amount: number;
			currencyCode: CurrencyCode;
		};
	}>;
}

export async function getSingleProduct(handle: string): Promise<SingleProduct> {
	const {productByHandle} = await ShopifyService.getProductSingle({handle});
	const {
		title,
		description,
		seo,
		images,
		variants,
		descriptionHtml,
		availableForSale,
		tags,
	} = productByHandle!;

	const product: SingleProduct = {
		title: formatTitle(title),
		description,
		descriptionHtml,
		outOfStock: !availableForSale,
		tags,
		seo: {
			title: formatTitle(seo.title ?? title),
			description: seo.description ?? truncate(description, {length: 256}),
		},
		images: images.edges.map(({node}) => ({
			id: node.id ?? '',
			src: node.transformedSrc,
			alt: node.altText ?? '',
		})),
		variants: variants.edges.map(({node}) => {
			const variant: SingleProduct['variants'][0] = {
				outOfStock: !node.availableForSale,
				id: node.id,
				title: node.title,
				image: node.image?.id ?? '',
				price: {
					amount: Number(node.priceV2.amount),
					currencyCode: node.priceV2.currencyCode,
				},
			};

			return variant;
		}),
	};

	return product;
}

export interface ProductListItem {
	id: string;
	url: string;
	title: string;
	description: string;
	outOfStock: boolean;
	image: {
		src: string;
		alt: string;
	};
	price: {
		amount: number;
		currencyCode: CurrencyCode;
	};
}

export interface ProductList {
	products: Array<Merge<ProductListItem, {cursor: string}>>;
	pageInfo: GetProductListQuery['products']['pageInfo'];
}

export async function getProductList(
	variables?: GetProductListQueryVariables,
): Promise<ProductList> {
	const {
		products: {edges, pageInfo},
	} = await ShopifyService.getProductList(variables);

	const products: ProductList['products'] = edges.map(({node, cursor}) => ({
		id: node.id,
		cursor,
		url: `/products/${node.handle}`,
		title: formatTitle(node.title),
		description: node.description,
		outOfStock: !node.availableForSale,
		image: {
			src: node.images.edges[0].node.transformedSrc,
			alt: node.images.edges[0].node.altText!,
		},
		price: {
			amount: Number(node.priceRange.minVariantPrice.amount),
			currencyCode: node.priceRange.minVariantPrice.currencyCode,
		},
	}));

	return {products, pageInfo};
}

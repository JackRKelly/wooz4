/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import nookies from 'nookies';
import formatTitle from 'title';
import {NextPageContext} from 'next';
import {
	ShopifyService,
	CheckoutLineItemInput,
	CheckoutLineItemUpdateInput,
	CurrencyCode,
} from './shopify';

const CHECKOUT_ID = 'CHECKOUT_ID';

export interface CartItem {
	id: string;
	title: string;
	quantity: number;
	variant: {
		id: string;
		title: string;
		url: string;
		price: {
			amount: number;
			currencyCode: CurrencyCode;
		};
		image: {
			src: string;
			alt: string;
		};
	};
}

export type Cart = {
	items: CartItem[];
	subtotal: {
		amount: number;
		currencyCode: CurrencyCode;
	};
	tax: {
		amount: number;
		currencyCode: CurrencyCode;
	};
	total: {
		amount: number;
		currencyCode: CurrencyCode;
	};
	url: string;
};

export async function getCart(
	context?: NextPageContext,
): Promise<Cart | undefined> {
	const checkoutId = nookies.get(context, CHECKOUT_ID).CHECKOUT_ID;

	if (checkoutId) {
		const {node} = await ShopifyService.getCart({checkoutId});

		if (node?.__typename === 'Checkout') {
			const items: CartItem[] = node.lineItems.edges.map(({node}) => {
				const item: CartItem = {
					id: node.id,
					title: formatTitle(node.title),
					quantity: node.quantity,
					variant: {
						id: node.variant?.id ?? '',
						title: node.variant?.title ?? '',
						url: `/products/${node.variant?.product.handle ?? ''}`,
						price: {
							amount: Number(node.variant?.priceV2?.amount),
							currencyCode:
								node.variant?.priceV2?.currencyCode ?? ('USD' as CurrencyCode),
						},
						image: {
							src: node.variant?.image?.transformedSrc ?? '',
							alt: node.variant?.image?.altText ?? '',
						},
					},
				};

				return item;
			});

			return {
				items,
				url: node.webUrl,
				subtotal: {
					amount: Number(node.subtotalPriceV2.amount),
					currencyCode: node.subtotalPriceV2.currencyCode,
				},
				tax: {
					amount: Number(node.totalTaxV2.amount),
					currencyCode: node.totalTaxV2.currencyCode,
				},
				total: {
					amount: Number(node.totalPriceV2.amount),
					currencyCode: node.totalPriceV2.currencyCode,
				},
			};
		}
	}
}

export async function getItemCount(context?: NextPageContext): Promise<number> {
	let count = 0;
	const checkoutId = nookies.get(context, CHECKOUT_ID).CHECKOUT_ID;

	if (checkoutId) {
		const {node} = await ShopifyService.getCartItemCount({checkoutId});

		if (node?.__typename === 'Checkout') {
			node?.lineItems.edges.forEach(lineItem => {
				count += lineItem.node.quantity;
			});
		}
	}

	return count;
}

export async function addItem(
	lineItem: CheckoutLineItemInput,
	context?: NextPageContext,
): Promise<void> {
	try {
		const checkoutId = nookies.get(context, CHECKOUT_ID).CHECKOUT_ID;
		await ShopifyService.addCartItem({checkoutId, lineItem});
	} catch {
		const {checkoutCreate} = await ShopifyService.createCart({
			input: {lineItems: [lineItem]},
		});
		nookies.set(context, CHECKOUT_ID, checkoutCreate?.checkout?.id ?? '', {
			maxAge: 30 * 24 * 60 * 60,
		});
	}
}

export async function updateItem(
	lineItem: CheckoutLineItemUpdateInput,
	context?: NextPageContext,
): Promise<void> {
	const checkoutId = nookies.get(context, CHECKOUT_ID)?.CHECKOUT_ID;
	await ShopifyService.updateCartItem({checkoutId, lineItem});
}

export async function removeItem(
	lineItemId: string,
	context?: NextPageContext,
): Promise<void> {
	const checkoutId = nookies.get(context, CHECKOUT_ID).CHECKOUT_ID;
	await ShopifyService.removeCartItem({checkoutId, lineItemId});
}

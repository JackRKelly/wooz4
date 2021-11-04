import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';
import {useQuery} from 'react-query';
import {CART_QUERY} from '../const/query';
import {getCart} from '../services/cart';
import Link from 'next/link';
import {formatPrice, Price} from '../util/intl';
import {CartListItem} from '../components/CartListItem';
import styled from 'styled-components';
import {CurrencyCode} from '../services/shopify';
import {StyledLink} from '../components/Link';
import {ArrowRight} from '../assets/svg';

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(22rem, 2fr) minmax(11rem, 1fr);
	column-gap: 2rem;
	.swiper {
		width: 100%;
	}
`;

const pricePlaceholder: Price = {
	amount: 0,
	currencyCode: 'USD' as CurrencyCode,
};

const Cart: NextPage = () => {
	const cart = useQuery(CART_QUERY, async () => getCart());

	const cartItemCount = cart.data?.items.length;

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('Cart', 'after')}</title>
			</Head>
			<h1>Your Cart</h1>
			<p>
				TOTAL: ({cartItemCount} items){' '}
				<strong>{formatPrice(cart?.data?.total ?? pricePlaceholder)}</strong>
			</p>

			<GridWrapper>
				<div>
					{cartItemCount && cart.data ? (
						cart.data.items.map(item => (
							<CartListItem key={item.id} item={item} />
						))
					) : (
						<p>
							Your cart is empty!
							<Link href="/products">Shop products</Link>
						</p>
					)}
				</div>

				<div>
					{cartItemCount && cart.data ? (
						<div>
							<p>Order Summary</p>
							<div>
								Subtotal is <span>{formatPrice(cart.data.subtotal)}</span>
							</div>
							<div>
								Tax is <span>{formatPrice(cart.data.tax)}</span>
							</div>
							<div>
								Total is <span>{formatPrice(cart.data.total)}</span>
							</div>
							<StyledLink
								link={cart.data.url}
								Icon={<ArrowRight />}
								iconHover="translate(5px)"
							>
								Checkout
							</StyledLink>
						</div>
					) : null}
				</div>
			</GridWrapper>
		</ContentColumn>
	);
};

export default Cart;

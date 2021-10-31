import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';
import {useQuery} from 'react-query';
import {CART_QUERY} from '../const/query';
import {getCart} from '../services/cart';
import Link from 'next/link';
import {formatPrice} from '../util/intl';
import {CartListItem} from '../components/CartListItem';

const Cart: NextPage = () => {
	const cart = useQuery(CART_QUERY, async () => getCart());

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('Cart', 'after')}</title>
			</Head>
			<h1>Cart</h1>
			<p>This page is under construction</p>

			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Title</th>
						<th>Quantity</th>
						<th>Unit Price</th>
						<th>Total Price</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{cart.data?.items.map(item => (
						<CartListItem key={item.id} item={item} />
					))}
				</tbody>
			</table>

			{cart.data?.items.length ? (
				<section>
					<div>Cart</div>

					<div>
						Subtotal is <span>{formatPrice(cart.data.subtotal)}</span>
					</div>
					<div>
						Tax is <span>{formatPrice(cart.data.tax)}</span>
					</div>
					<div>
						Total is <span>{formatPrice(cart.data.total)}</span>
					</div>

					<a href={cart.data.url} target="_blank" rel="noreferrer">
						Checkout
					</a>
				</section>
			) : (
				<Link href="/products">cart empty shop</Link>
			)}
		</ContentColumn>
	);
};

export default Cart;

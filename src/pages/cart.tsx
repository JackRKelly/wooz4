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

const Cart: NextPage = () => {
	const cart = useQuery(CART_QUERY, async () => getCart());

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('Cart', 'after')}</title>
			</Head>
			<h2>Cart</h2>
			<p>This page is under construction</p>

			{/* <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="center">
            Quantity
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }} align="center">
            Unit Price
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }} align="center">
            Total Price
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Remove
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </TableBody>
    </Table> */}

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

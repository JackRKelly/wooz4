import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';

const Cart: NextPage = () => (
	<div>
		<Head>
			<title>{buildTitle('Cart', 'after')}</title>
		</Head>

		<ContentColumn>
			<h1>Cart</h1>
		</ContentColumn>
	</div>
);

export default Cart;

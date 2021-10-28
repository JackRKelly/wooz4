import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';

const Cart: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Cart', 'after')}</title>
		</Head>
		<h1>Cart</h1>
	</ContentColumn>
);

export default Cart;

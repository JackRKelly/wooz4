import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';

const Cart: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Cart', 'after')}</title>
		</Head>
		<h2>Cart</h2>
		<p>This page is under construction</p>
	</ContentColumn>
);

export default Cart;

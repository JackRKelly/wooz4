import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';

const Shop: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Shop', 'after')}</title>
		</Head>

		<h2>Collections</h2>
		<p>This page is under construction</p>
	</ContentColumn>
);

export default Shop;

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';

const FourOFour = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Page Not Found', 'after')}</title>
		</Head>
		<h1>404 - Page Not Found</h1>
		<p>This page is under construction</p>
		<Link href="/">
			<a>Return Home</a>
		</Link>
	</ContentColumn>
);

export default FourOFour;

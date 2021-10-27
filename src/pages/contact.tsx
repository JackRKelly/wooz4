import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';

const Contact: NextPage = () => (
	<div>
		<Head>
			<title>{buildTitle('Contact', 'after')}</title>
			<meta name="description" content="All about Jack Kelly" />
		</Head>

		<ContentColumn>
			<h1>Contact</h1>
		</ContentColumn>
	</div>
);

export default Contact;

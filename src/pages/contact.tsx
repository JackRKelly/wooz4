import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';

const Contact: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Contact', 'after')}</title>
		</Head>
		<h1>Contact</h1>
		<p>This page is under construction</p>
	</ContentColumn>
);

export default Contact;

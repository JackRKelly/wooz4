import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';

const About: NextPage = () => (
	<div>
		<Head>
			<title>{buildTitle('Blog', 'after')}</title>
			<meta name="description" content="All about Jack Kelly" />
		</Head>

		<ContentColumn>
			<h1>About me</h1>
		</ContentColumn>
	</div>
);

export default About;

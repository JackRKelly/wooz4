import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {FeaturedCollection} from 'components/FeaturedCollection';

const Home: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Home', 'after')}</title>
		</Head>

		<section>
			<h2>Wooz4</h2>
			<p>Modern japanese inspired clothing brand</p>
		</section>

		<FeaturedCollection />
	</ContentColumn>
);

export default Home;

import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {FeaturedCollection} from '../components/FeaturedCollection';
import {buildTitle} from '../util/title';
import * as CollectionService from '../services/collection';

const FEATURED_COLLECTION_HANDLE = 'sakura-collection';

interface Props {
	featuredCollection: CollectionService.Single;
}

const Home: NextPage<Props> = ({featuredCollection}: Props) => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Home', 'after')}</title>
		</Head>

		<section>
			<h2>Wooz4</h2>
			<p>Modern japanese inspired clothing brand</p>
		</section>

		<FeaturedCollection
			collection={featuredCollection}
			handle={FEATURED_COLLECTION_HANDLE}
		/>
	</ContentColumn>
);

Home.getInitialProps = async (): Promise<Props> => {
	const featuredCollection = await CollectionService.getSingle(
		FEATURED_COLLECTION_HANDLE,
	);

	return {featuredCollection};
};

export default Home;

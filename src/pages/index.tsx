import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {FeaturedCollection} from '../components/FeaturedCollection';
import {buildTitle} from '../util/title';
import {
	getCollectionProducts,
	getSingleCollection,
	SingleCollection,
} from '../services/collection';
import {ProductList} from '../services/product';

const FEATURED_COLLECTION_HANDLE = 'sakura-collection';

interface Props {
	collection: SingleCollection;
	collectionProductList: ProductList;
}

const Home: NextPage<Props> = ({collection, collectionProductList}: Props) => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Home', 'after')}</title>
		</Head>

		<section>
			<h2>Wooz4</h2>
			<p>Modern japanese inspired clothing brand</p>
		</section>

		<FeaturedCollection
			collection={collection}
			productList={collectionProductList}
			handle={FEATURED_COLLECTION_HANDLE}
		/>
	</ContentColumn>
);

Home.getInitialProps = async (): Promise<Props> => {
	const collection = await getSingleCollection(FEATURED_COLLECTION_HANDLE);
	const collectionProductList = await getCollectionProducts({
		handle: FEATURED_COLLECTION_HANDLE,
	});

	return {collection, collectionProductList};
};

export default Home;

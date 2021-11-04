import {last} from 'lodash';
import type {NextPage} from 'next';
import React from 'react';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {CollectionCardGrid} from '../../components/CollectionCard.styled';
import {ContentColumn} from '../../components/ContentColumn';
import {PageLoader} from '../../components/PageLoader';
import {COLLECTION_LIST_QUERY} from '../../const/query';
import {CollectionList, getCollectionList} from '../../services/collection';
import {CollectionCard} from '../../components/CollectionCard';
import {buildTitle} from '../../util/title';
import Head from 'next/head';

interface Props {
	initialData: InfiniteData<CollectionList>;
}

const Collections: NextPage<Props> = ({initialData}: Props) => {
	const collectionList = useInfiniteQuery(
		COLLECTION_LIST_QUERY,

		async ({pageParam}: {pageParam?: string}) =>
			getCollectionList({after: pageParam}),
		{
			initialData,
			getNextPageParam: lastPage => {
				if (lastPage.pageInfo.hasNextPage) {
					return last(lastPage.collections)?.cursor;
				}
			},
		},
	);

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('All Collections', 'after')}</title>
			</Head>
			<h1>All collections</h1>
			<CollectionCardGrid>
				{collectionList.data?.pages
					.flatMap(({collections}) => collections)
					.map(collection => (
						<CollectionCard key={collection.id} collection={collection} />
					))}
			</CollectionCardGrid>
			<PageLoader {...collectionList} />
		</ContentColumn>
	);
};

Collections.getInitialProps = async (): Promise<Props> => {
	const firstPage = await getCollectionList();

	return {
		initialData: {pages: [firstPage], pageParams: [null]},
	};
};

export default Collections;

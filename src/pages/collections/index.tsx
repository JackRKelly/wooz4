import {last} from 'lodash';
import type {NextPage} from 'next';
import React from 'react';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {ContentColumn} from '../../components/ContentColumn';
import {PageLoader} from '../../components/PageLoading';
import {COLLECTION_LIST_QUERY} from '../../const/query';
import {CollectionList, getCollectionList} from '../../services/collection';

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
			<p>This page is under construction</p>
			{collectionList.data?.pages
				.flatMap(({collections}) => collections)
				.map(collection => (
					<p key={collection.id}>
						{collection.title} - {collection.description}
					</p>
				))}
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

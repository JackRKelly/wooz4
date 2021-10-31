import {last} from 'lodash';
import type {NextPage} from 'next';
import React from 'react';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {
	CollectionCardDescription,
	CollectionCardGrid,
	CollectionCardStyled,
	CollectionCardTitle,
} from '../../components/CollectionCard.styled';
import {ContentColumn} from '../../components/ContentColumn';
import {NormalizedLink} from '../../components/Normalized.styled';
import {PageLoader} from '../../components/PageLoading';
import {COLLECTION_LIST_QUERY} from '../../const/query';
import {CollectionList, getCollectionList} from '../../services/collection';
import Link from 'next/link';

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
			<h2>Viewing all collections</h2>
			<CollectionCardGrid>
				{collectionList.data?.pages
					.flatMap(({collections}) => collections)
					.map(collection => (
						<div key={collection.id}>
							<Link passHref href={`/collections/${collection.handle}`}>
								<NormalizedLink>
									<CollectionCardStyled backgroundImage={collection.image.src}>
										<CollectionCardTitle>
											{collection.title}
										</CollectionCardTitle>
										{collection.description ? (
											<CollectionCardDescription>
												{collection.description}
											</CollectionCardDescription>
										) : null}
									</CollectionCardStyled>
								</NormalizedLink>
							</Link>
						</div>
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

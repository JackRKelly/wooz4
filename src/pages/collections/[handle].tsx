import {last} from 'lodash';
import {NextPageContext} from 'next';
import Head from 'next/head';
import React from 'react';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import styled from 'styled-components';
import {ContentColumn} from '../../components/ContentColumn';
import {PageLoader} from '../../components/PageLoading';
import {ProductCard} from '../../components/ProductCard';
import {ProductCardGrid} from '../../components/ProductCard.styled';
import {colors} from '../../const';
import {PRODUCT_LIST_QUERY} from '../../const/query';
import {
	SingleCollection,
	getSingleCollection,
	getCollectionProducts,
} from '../../services/collection';
import {ProductList} from '../../services/product';

import {buildTitle} from '../../util/title';
interface Props {
	collection: SingleCollection;
	handle: string;
	initialData: InfiniteData<ProductList>;
}

const Collection = ({collection, initialData, handle}: Props) => {
	const productList = useInfiniteQuery(
		PRODUCT_LIST_QUERY,
		async ({pageParam}: {pageParam?: string}) =>
			getCollectionProducts({handle, after: pageParam}),
		{
			initialData,
			getNextPageParam: lastPage => {
				if (lastPage.pageInfo.hasNextPage) {
					return last(lastPage.products)?.cursor;
				}
			},
		},
	);

	const {description, image, title} = collection;

	return (
		<>
			<Head>
				<title>
					{title
						? buildTitle(`${title}`, 'after')
						: buildTitle('Loading...', 'before')}
				</title>
			</Head>

			<SectionWithBackgroundImage backgroundImage={image?.src}>
				<ContentColumn padding="5.25rem 0 5.25rem 0">
					<SectionTitle>{title}</SectionTitle>
					<SectionDescription>{description}</SectionDescription>
				</ContentColumn>
			</SectionWithBackgroundImage>
			<ContentColumn>
				<ProductCardGrid>
					{productList.data?.pages
						.flatMap(({products}) => products)
						.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
				</ProductCardGrid>
				<PageLoader {...productList} />
			</ContentColumn>
		</>
	);
};

Collection.getInitialProps = async ({
	query,
}: NextPageContext): Promise<Props> => {
	const handle = query.handle as string;
	const collection = await getSingleCollection(handle);
	const firstPage = await getCollectionProducts({handle});

	return {
		collection,
		handle,
		initialData: {pages: [firstPage], pageParams: [null]},
	};
};

const SectionWithBackgroundImage = styled.section<{backgroundImage: string}>`
	background-image: linear-gradient(
			45deg,
			rgba(0, 0, 0, 0.727),
			rgba(0, 0, 0, 0.5)
		),
		url('${props => props.backgroundImage ?? 'none'}');
	background-size: cover;
	background-position: left;
`;

const SectionTitle = styled.h2`
	color: ${colors.white};
	text-align: center;
	margin-top: 0;
`;

const SectionDescription = styled.p`
	color: ${colors.white};
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;

export default Collection;

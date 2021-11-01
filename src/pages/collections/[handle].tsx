import {last} from 'lodash';
import {NextPageContext} from 'next';
import Head from 'next/head';
import React from 'react';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {ContentColumn} from '../../components/ContentColumn';
import {
	HeroWrapper,
	HeroTitle,
	HeroDescription,
} from '../../components/Hero.styled';
import {PageLoader} from '../../components/PageLoading';
import {ProductCard} from '../../components/ProductCard';
import {ProductCardGrid} from '../../components/ProductCard.styled';
import {COLLECTION_PRODUCT_LIST_QUERY} from '../../const/query';
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
		COLLECTION_PRODUCT_LIST_QUERY,
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
				<title>{buildTitle(`${title}`, 'after')}</title>
			</Head>

			<HeroWrapper
				backgroundImage={
					image.src ? image.src : '/images/no-image-collection-banner.jpg'
				}
			>
				<ContentColumn padding="5.25rem 0 5.25rem 0">
					<HeroTitle>{title}</HeroTitle>
					<HeroDescription>{description}</HeroDescription>
				</ContentColumn>
			</HeroWrapper>
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

export default Collection;

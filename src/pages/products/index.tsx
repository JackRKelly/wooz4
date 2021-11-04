import React from 'react';
import type {NextPage} from 'next';
import last from 'lodash/last';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {PRODUCT_LIST_QUERY} from '../../const/query';
import {getProductList, ProductList} from '../../services/product';
import {ProductCard, ProductCardGrid} from '../../components/ProductCard';
import {PageLoader} from '../../components/PageLoader';
import {ContentColumn} from '../../components/ContentColumn';
import Head from 'next/head';
import {buildTitle} from '../../util/title';

interface Props {
	initialData: InfiniteData<ProductList>;
}

const Products: NextPage<Props> = ({initialData}: Props) => {
	const productList = useInfiniteQuery(
		PRODUCT_LIST_QUERY,

		async ({pageParam}: {pageParam?: string}) =>
			getProductList({after: pageParam}),
		{
			initialData,
			getNextPageParam: lastPage => {
				if (lastPage.pageInfo.hasNextPage) {
					return last(lastPage.products)?.cursor;
				}
			},
		},
	);

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('All Products', 'after')}</title>
			</Head>
			<h1>All Products</h1>
			<ProductCardGrid>
				{productList.data?.pages
					.flatMap(({products}) => products)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</ProductCardGrid>
			<PageLoader {...productList} />
		</ContentColumn>
	);
};

Products.getInitialProps = async (): Promise<Props> => {
	const firstPage = await getProductList();

	return {
		initialData: {pages: [firstPage], pageParams: [null]},
	};
};

export default Products;

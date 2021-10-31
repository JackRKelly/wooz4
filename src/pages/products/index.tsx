import React from 'react';
import type {NextPage} from 'next';
import last from 'lodash/last';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {PRODUCT_LIST_QUERY} from '../../const/query';
import {getList, List} from '../../services/product';
import {ProductCard, ProductCardGrid} from '../../components/ProductCard';
import {PageLoader} from '../../components/PageLoading';
import {ContentColumn} from '../../components/ContentColumn';

interface Props {
	initialData: InfiniteData<List>;
}

const Shop: NextPage<Props> = ({initialData}: Props) => {
	const productList = useInfiniteQuery(
		PRODUCT_LIST_QUERY,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		async ({pageParam}) => getList({after: pageParam}),
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
			<h2>Products</h2>
			<ProductCardGrid>
				{productList.data?.pages
					.flatMap(({products}) => products)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				<PageLoader {...productList} />
			</ProductCardGrid>
		</ContentColumn>
	);
};

Shop.getInitialProps = async (): Promise<Props> => {
	const firstPage = await getList();

	return {
		initialData: {pages: [firstPage], pageParams: [null]},
	};
};

export default Shop;

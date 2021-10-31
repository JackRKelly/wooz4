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
// const productWrapperRef = useRef<HTMLDivElement | null>(null);
// if (error) {
// 	console.error(error);
// }
// const {products} = data ?? {};
// const next = () => {
// 	void fetchMore({
// 		variables: {
// 			first: PRODUCTS_PER_PAGE,
// 			after:
// 				products?.edges[(products?.edges?.length ?? 1) - 1]?.cursor ?? null,
// 			last: null,
// 			before: null,
// 		},
// 		updateQuery: (prevResult, {fetchMoreResult}) => {
// 			if (!fetchMoreResult || fetchMoreResult.products.edges.length === 0) {
// 				return prevResult;
// 			}
// 			return fetchMoreResult;
// 		},
// 	});
// 	scrollFromTop(productWrapperRef?.current?.offsetTop ?? 0);
// };
// const prev = () => {
// 	void fetchMore({
// 		variables: {
// 			first: null,
// 			after: null,
// 			last: PRODUCTS_PER_PAGE,
// 			before: products?.edges[0]?.cursor ?? null,
// 		},
// 		updateQuery: (prevResult, {fetchMoreResult}) => {
// 			if (!fetchMoreResult || fetchMoreResult.products.edges.length === 0) {
// 				return prevResult;
// 			}
// 			return fetchMoreResult;
// 		},
// 	});
// 	scrollFromTop(productWrapperRef?.current?.offsetTop ?? 0);
// };
// return (
// 	<>
// 		<Head>
// 			<title>{buildTitle('Shop', 'after')}</title>
// 		</Head>
// 		<LoadingSpinner isLoading={loading} />
// 		<ContentColumn ref={productWrapperRef}>
// 			<FlexRowWrapper padding="1rem 0">
// 				<H2NoMargin>Products</H2NoMargin>
// 				<Pagination
// 					hasNextPage={Boolean(products?.pageInfo.hasNextPage)}
// 					hasPreviousPage={Boolean(products?.pageInfo.hasPreviousPage)}
// 					next={next}
// 					prev={prev}
// 				/>
// 			</FlexRowWrapper>
// 			<ProductCardGrid>
// 				{products?.edges?.map(
// 					({
// 						node: {
// 							id,
// 							title,
// 							handle,
// 							images: {edges},
// 							priceRange: {
// 								minVariantPrice: {amount, currencyCode},
// 							},
// 						},
// 					}) => (
// 						<ProductCard
// 							key={id}
// 							link={`/product/${handle}`}
// 							price={amount as string}
// 							currencyCode={currencyCode}
// 							thumbnail={edges[0].node.transformedSrc as string}
// 							title={title}
// 						/>
// 					),
// 				)}
// 			</ProductCardGrid>
// 			<FlexRowWrapper padding="1rem 0" justifyContent="flex-end">
// 				<MobilePaginationWrapper>
// 					<Pagination
// 						hasNextPage={Boolean(products?.pageInfo.hasNextPage)}
// 						hasPreviousPage={Boolean(products?.pageInfo.hasPreviousPage)}
// 						next={next}
// 						prev={prev}
// 					/>
// 				</MobilePaginationWrapper>
// 			</FlexRowWrapper>
// 		</ContentColumn>
// 	</>
// );
Shop.getInitialProps = async (): Promise<Props> => {
	const firstPage = await getList();

	return {
		initialData: {pages: [firstPage], pageParams: [null]},
	};
};

export default Shop;

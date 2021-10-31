import React, {useRef} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';

const PRODUCTS_PER_PAGE = 12;

const Shop: NextPage = () => {
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
	return null;
};

export default Shop;

import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useRef} from 'react';
import styled from 'styled-components';
import {ContentColumn} from '../../components/ContentColumn';
import {FlexRowWrapper} from '../../components/Flex.styled';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {Pagination} from '../../components/Pagination';
import {MobilePaginationWrapper} from '../../components/Pagination.styled';
import {ProductCard} from '../../components/ProductCard';
import {ProductCardGrid} from '../../components/ProductCard.styled';
import {colors} from '../../const';
import {GET_COLLECTION_BY_HANDLE} from '../../graph';
import {
	GetCollectionByHandle,
	GetCollectionByHandleVariables,
} from '../../graph/@types/GetCollectionByHandle';
import {scrollFromTop} from '../../util/scroll';
import {buildTitle} from '../../util/title';

const PRODUCTS_PER_PAGE = 12;

const Collection = () =>
	// const productWrapperRef = useRef<HTMLDivElement | null>(null);
	// const router = useRouter();
	// const {handle} = router.query;
	// const {loading, data, fetchMore} = useQuery<
	// 	GetCollectionByHandle,
	// 	GetCollectionByHandleVariables
	// >(GET_COLLECTION_BY_HANDLE, {
	// 	variables: {
	// 		handle: handle?.toString() ?? '',
	// 		first: PRODUCTS_PER_PAGE,
	// 		last: null,
	// 		after: null,
	// 		before: null,
	// 	},
	// });
	// const {collectionByHandle} = data ?? {};
	// const {title, description, products, image} = collectionByHandle ?? {};
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
	// 			if (
	// 				!fetchMoreResult ||
	// 				!fetchMoreResult?.collectionByHandle ||
	// 				fetchMoreResult?.collectionByHandle.products.edges.length === 0
	// 			) {
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
	// 			if (
	// 				!fetchMoreResult ||
	// 				!fetchMoreResult?.collectionByHandle ||
	// 				fetchMoreResult.collectionByHandle.products.edges.length === 0
	// 			) {
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
	// 			<title>
	// 				{title
	// 					? buildTitle(`${title}`, 'after')
	// 					: buildTitle('Loading...', 'before')}
	// 			</title>
	// 		</Head>
	// 		<LoadingSpinner isLoading={loading} />
	// 		<SectionWithBackgroundImage
	// 			backgroundImage={image?.transformedSrc as string}
	// 		>
	// 			<ContentColumn padding="5.25rem 0 5.25rem 0">
	// 				<SectionTitle>{title}</SectionTitle>
	// 				<SectionDescription>{description}</SectionDescription>
	// 			</ContentColumn>
	// 		</SectionWithBackgroundImage>
	// 		<ContentColumn ref={productWrapperRef} padding="0 0 3.5rem 0">
	// 			<FlexRowWrapper padding="1rem 0" justifyContent="flex-end">
	// 				<Pagination
	// 					hasPreviousPage={Boolean(products?.pageInfo.hasPreviousPage)}
	// 					hasNextPage={Boolean(products?.pageInfo.hasNextPage)}
	// 					next={next}
	// 					prev={prev}
	// 				/>
	// 			</FlexRowWrapper>
	// 			<ProductCardGrid>
	// 				{products?.edges.map(
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
	// 							currencyCode={currencyCode}
	// 							link={handle ? `/product/${handle}` : '/products'}
	// 							price={amount as string}
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
	 null;
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

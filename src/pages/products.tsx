import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {useQuery} from '@apollo/client';
import {GetProducts, GetProductsVariables} from 'graph/@types/GetProducts';
import {GET_PRODUCTS} from 'graph';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {ArrowLeft, ArrowRight} from 'assets/svg';
import {ProductCard} from 'components/ProductCard';
import {ProductCardGrid} from 'components/ProductCard.styled';
import {PaginationButton, PaginationText} from 'components/Pagination.styled';
import {FlexRowWrapper, FlexRowWrapperPadded} from 'components/Flex.styled';
import {H2NoMargin} from 'components/Text.styled';

const PRODUCTS_PER_PAGE = 12;

const Shop: NextPage = () => {
	const {loading, error, data, fetchMore} = useQuery<
		GetProducts,
		GetProductsVariables
	>(GET_PRODUCTS, {
		variables: {
			first: PRODUCTS_PER_PAGE,
			last: null,
			after: null,
			before: null,
		},
	});

	if (error) {
		console.error(error);
	}

	const {products} = data ?? {};

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle('Shop', 'after')}</title>
			</Head>

			<LoadingSpinner isLoading={loading} />

			<FlexRowWrapperPadded>
				<H2NoMargin>Products</H2NoMargin>
				<FlexRowWrapper>
					<PaginationButton
						direction="left"
						type="button"
						disabled={!products?.pageInfo.hasPreviousPage}
						onClick={() => {
							void new Audio('/pop.mp3').play().catch(() => null);
							void fetchMore({
								variables: {
									first: null,
									after: null,
									last: PRODUCTS_PER_PAGE,
									before: products?.edges[0]?.cursor ?? null,
								},
								updateQuery: (prevResult, {fetchMoreResult}) => {
									if (
										!fetchMoreResult ||
										fetchMoreResult.products.edges.length === 0
									) {
										return prevResult;
									}
									return fetchMoreResult;
								},
							});
						}}
					>
						<FlexRowWrapper>
							<ArrowLeft />
							<PaginationText>Prev</PaginationText>
						</FlexRowWrapper>
					</PaginationButton>
					<PaginationButton
						direction="right"
						type="button"
						disabled={!products?.pageInfo.hasNextPage}
						onClick={() => {
							void new Audio('/pop.mp3').play().catch(() => null);
							void fetchMore({
								variables: {
									first: PRODUCTS_PER_PAGE,
									after:
										products?.edges[(products?.edges?.length ?? 1) - 1]
											?.cursor ?? null,
									last: null,
									before: null,
								},
								updateQuery: (prevResult, {fetchMoreResult}) => {
									if (
										!fetchMoreResult ||
										fetchMoreResult.products.edges.length === 0
									) {
										return prevResult;
									}
									return fetchMoreResult;
								},
							});
						}}
					>
						<FlexRowWrapper>
							<PaginationText>Next</PaginationText>
							<ArrowRight />
						</FlexRowWrapper>
					</PaginationButton>
				</FlexRowWrapper>
			</FlexRowWrapperPadded>

			<ProductCardGrid>
				{products?.edges?.map(
					({
						node: {
							id,
							title,
							handle,
							images: {edges},
							priceRange: {
								minVariantPrice: {amount, currencyCode},
							},
						},
					}) => (
						<ProductCard
							key={id}
							link={`/product/${handle}`}
							price={amount as string}
							currencyCode={currencyCode}
							thumbnail={edges[0].node.transformedSrc as string}
							title={title}
						/>
					),
				)}
			</ProductCardGrid>
		</ContentColumn>
	);
};

export default Shop;

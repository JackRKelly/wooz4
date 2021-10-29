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
import {FlexRowWrapper} from 'components/Styled';
import {NormalizedButton} from 'components/Styled/NormalizedButton';
import {colors, transitions} from 'const';
import styled from 'styled-components';
import {ProductCard} from 'components/ProductCard';
import {ProductCardGrid} from 'components/ProductCard.styled';

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

			<FlexRowWrapper>
				<h1>Shop Wooz4</h1>
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
			</FlexRowWrapper>

			<ProductCardGrid>
				{products?.edges?.map(
					({
						node: {
							id,
							title,
							images: {edges},
							priceRange: {
								minVariantPrice: {amount},
							},
						},
					}) => (
						<ProductCard
							key={id}
							link={`/product/${id}`}
							price={amount as string}
							thumbnail={edges[0].node.transformedSrc as string}
							title={title}
						/>
					),
				)}
			</ProductCardGrid>
		</ContentColumn>
	);
};

const PaginationText = styled.span`
	padding: 0.5rem;
	text-transform: uppercase;
	font-style: italic;
	font-weight: bold;
`;

const PaginationButton = styled(NormalizedButton)<{
	direction: 'left' | 'right';
}>`
	background-color: ${colors.white};
	margin: ${props =>
		props.direction === 'left' ? '0 .5rem 0 0' : '0 0 0 .5rem'};
	color: ${colors.darkGray};
	&:disabled {
		color: ${colors.lightGray};
		cursor: default;
	}
	svg {
		transition: ${transitions.easeInOutShort};
	}
	&:hover {
		svg {
			transform: translateX(
				${props => (props.direction === 'left' ? '-5px' : '5px')}
			);
		}
	}
`;

export default Shop;

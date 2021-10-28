import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {useQuery} from '@apollo/client';
import Image from 'next/image';
import {GetProducts, GetProductsVariables} from 'graph/@types/GetProducts';
import {GET_PRODUCTS} from 'graph';
import Link from 'next/link';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {
	ProductCardWrapper,
	ProductCardLink,
	ProductCard,
	ProductFlex,
	ProductCardImageWrapper,
	ProductCardGrid,
} from 'components/ProductCard';

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

			<h1>Shop Wooz4</h1>

			<ProductCardGrid>
				{products?.edges?.map(({node}) => {
					const {
						id,
						title,
						priceRange: {minVariantPrice},
						images,
					} = node;

					return (
						<ProductCardWrapper key={id}>
							<Link passHref href={`/product/${id}`}>
								<ProductCardLink>
									<ProductCard>
										<ProductFlex>
											<ProductCardImageWrapper>
												<Image
													alt="product"
													src={images?.edges[0].node.transformedSrc as string}
													layout="fill"
												/>
											</ProductCardImageWrapper>
											<span>
												{title} - ${minVariantPrice.amount}
											</span>
										</ProductFlex>
									</ProductCard>
								</ProductCardLink>
							</Link>
						</ProductCardWrapper>
					);
				})}
			</ProductCardGrid>

			<button
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
				previous
			</button>
			<span>Pagination</span>
			<button
				type="button"
				disabled={!products?.pageInfo.hasNextPage}
				onClick={() => {
					void new Audio('/pop.mp3').play().catch(() => null);
					void fetchMore({
						variables: {
							first: PRODUCTS_PER_PAGE,
							after:
								products?.edges[(products?.edges?.length ?? 1) - 1]?.cursor ??
								null,
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
				next
			</button>
		</ContentColumn>
	);
};

export default Shop;

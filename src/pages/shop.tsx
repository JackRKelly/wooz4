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

const Shop: NextPage = () => {
	const {loading, data} = useQuery<GetProducts, GetProductsVariables>(
		GET_PRODUCTS,
		{
			variables: {limit: 20},
		},
	);
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
		</ContentColumn>
	);
};

export default Shop;

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

const Shop: NextPage = () => {
	const {loading, data} = useQuery<GetProducts, GetProductsVariables>(
		GET_PRODUCTS,
		{
			variables: {limit: 10},
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
			{products?.edges?.map(({node}) => {
				const {
					id,
					title,
					images: {edges: images},
				} = node;

				return (
					<div key={id}>
						<Link href={`/product/${id}`}>
							<a>
								<Image
									alt={title}
									src={images[0].node.transformedSrc as string}
									width={100}
									height={100}
								/>
								{title}
							</a>
						</Link>
					</div>
				);
			})}
		</ContentColumn>
	);
};

export default Shop;

import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {useQuery} from '@apollo/client';
import Image from 'next/image';
import {GetProductInfo} from 'graphql/@types/GetProductInfo';
import GET_PRODUCT_INVENTORY from 'graphql/GetProductInfo.graphql';
import Link from 'next/link';
import {LoadingSpinner} from 'components/LoadingSpinner';

const Shop: NextPage = () => {
	const {loading, data} = useQuery<GetProductInfo>(GET_PRODUCT_INVENTORY);

	const {products} = data ?? {};

	console.log(data);

	return (
		<div>
			<Head>
				<title>{buildTitle('Shop', 'after')}</title>
				<meta name="description" content="All about Jack Kelly" />
			</Head>

			<ContentColumn>
				<h1>Shop Wooz4</h1>

				<LoadingSpinner isLoading={loading} />

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
		</div>
	);
};

export default Shop;

import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import {buildTitle} from 'util/title';
import {useQuery} from '@apollo/client';
import Image from 'next/image';
import {GetProductInfo} from 'graphql/@types/GetProductInfo';
import GET_PRODUCT_INVENTORY from 'graphql/GetProductInfo.graphql';

const Shop: NextPage = () => {
	const {data} = useQuery<GetProductInfo>(GET_PRODUCT_INVENTORY);

	return (
		<div>
			<Head>
				<title>{buildTitle('Shop', 'after')}</title>
				<meta name="description" content="All about Jack Kelly" />
			</Head>

			<ContentColumn>
				<h1>Shop Wooz4</h1>

				{data?.products?.edges?.map(({node: product}) => (
					<div key={product.id}>
						<a href={product.onlineStoreUrl} target="_blank">
							<Image
								alt={product.title}
								src={product.images.edges[0].node.transformedSrc}
								width={100}
								height={100}
							/>
							{product.title}
						</a>
					</div>
				))}
			</ContentColumn>
		</div>
	);
};

export default Shop;

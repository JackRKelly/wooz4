import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import GET_PRODUCT_BY_ID from 'graphql/GetProductById.graphql';
import {useQuery} from '@apollo/client';
import {
	GetProductById,
	GetProductByIdVariables,
} from 'graphql/@types/GetProductById';
import Image from 'next/image';
import Head from 'next/head';
import {Select, Option} from 'components/Select';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {buildTitle} from 'util/title';

const Product = () => {
	const router = useRouter();
	const {id} = router.query;

	const {loading, data} = useQuery<GetProductById, GetProductByIdVariables>(
		GET_PRODUCT_BY_ID,
		{
			variables: {id: id?.toString() ?? ''},
		},
	);

	const {product} = data ?? {};
	const {title, priceRange, options: productOptions, images} = product ?? {};

	return (
		<>
			<Head>
				<title>{buildTitle(`${title ?? 'View Product'}`, 'after')}</title>
			</Head>

			<LoadingSpinner isLoading={loading} />

			<ContentColumn>
				<h1>{title}</h1>
				<p>Product ID: {id}</p>
				<p>Price: ${priceRange?.minVariantPrice.amount}</p>
				{productOptions?.map(option => {
					const options: Option[] = option.values.map(value => ({
						id: `${option.id}${value}`,
						value,
					}));
					return (
						<div key={option.id}>
							<p>{option.name}</p>
							<Select options={options} />
						</div>
					);
				})}
				{images?.edges[0]?.node?.transformedSrc && (
					<Image
						alt={title}
						src={images?.edges[0]?.node?.transformedSrc as string}
						width={300}
						height={300}
					/>
				)}
			</ContentColumn>
		</>
	);
};

export default Product;

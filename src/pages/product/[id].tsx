import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import GET_PRODUCT_BY_ID from 'graphql/GetProductById.graphql';
import {useQuery} from '@apollo/client';
import {
	GetProductById,
	GetProductByIdVariables,
} from 'graphql/@types/GetProductById';

const Product = () => {
	const router = useRouter();
	const {id} = router.query;

	const {data} = useQuery<GetProductById, GetProductByIdVariables>(
		GET_PRODUCT_BY_ID,
		{
			variables: {id: id?.toString() ?? ''},
		},
	);

	return (
		<ContentColumn>
			<h1>{data?.product?.title}</h1>
			<p>Product ID: {id}</p>
			<p>Price: ${data?.product?.priceRange.minVariantPrice.amount}</p>
		</ContentColumn>
	);
};

export default Product;

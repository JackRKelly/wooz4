import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import GET_PRODUCT_BY_ID from 'graphql/GetProductById.graphql';
import {gql, useQuery} from '@apollo/client';
import {
	GetProductById,
	GetProductByIdVariables,
} from 'graphql/@types/GetProductById';

const Product = () => {
	const router = useRouter();
	const {id} = router.query;

	const QUERY = gql`
		query GetProductById($id: ID!) {
			product(id: $id) {
				title
			}
		}
	`;

	const {data} = useQuery<GetProductById, GetProductByIdVariables>(QUERY, {
		variables: {id: id?.toString()},
	});

	console.log(id, data);

	return (
		<ContentColumn>
			<p>Product: {id}</p>
		</ContentColumn>
	);
};

export default Product;

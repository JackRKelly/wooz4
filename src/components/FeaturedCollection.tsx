import {GET_COLLECTION_BY_ID} from 'graph';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {useQuery} from '@apollo/client';
import React from 'react';

export const FeaturedCollection = () => {
	const {data} = useQuery<GetCollectionById, GetCollectionByIdVariables>(
		GET_COLLECTION_BY_ID,
		{
			variables: {id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM0OTM1OTQwNzM0Mg=='},
		},
	);

	const {collection} = data ?? {};
	const {title, description, products} = collection ?? {};

	console.log(collection);

	return (
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
			{products?.edges.map(
				({
					node: {
						id,
						priceRange: {
							minVariantPrice: {amount, currencyCode},
						},
					},
				}) => (
					<div key={id}>
						product {id}, price {amount} {currencyCode}
					</div>
				),
			)}
		</section>
	);
};

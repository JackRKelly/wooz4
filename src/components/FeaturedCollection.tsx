import {GET_COLLECTION_BY_ID} from 'graph';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {useQuery} from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import {ProductCard, ProductCardGrid} from './ProductCard';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {ArrowLink} from 'components/Link';

export const FeaturedCollection = () => {
	const CURRENT_COLLECTION_ID =
		'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM0OTM1OTQwNzM0Mg==';

	const {loading, data} = useQuery<
		GetCollectionById,
		GetCollectionByIdVariables
	>(GET_COLLECTION_BY_ID, {
		variables: {id: CURRENT_COLLECTION_ID},
	});

	const {collection} = data ?? {};
	const {title, description, products} = collection ?? {};

	return (
		<section>
			<h3>{title}</h3>
			<p>{description}</p>

			<LoadingSpinner isLoading={loading} />

			<ProductCardGrid>
				{products?.edges.map(
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

			<ViewCollectionLinkWrapper>
				<ArrowLink
					link={`/collection/${CURRENT_COLLECTION_ID}`}
					text="View Collection"
				/>
			</ViewCollectionLinkWrapper>
		</section>
	);
};

const ViewCollectionLinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1.5rem 0;
`;

import React from 'react';

import {GET_COLLECTION_BY_HANDLE} from '../graph';
import styled from 'styled-components';
import {
	GetCollectionByHandle,
	GetCollectionByHandleVariables,
} from '../graph/@types/GetCollectionByHandle';
import {ArrowLink} from './Link';
import {LoadingSpinner} from './LoadingSpinner';
import {ProductCard} from './ProductCard';
import {ProductCardGrid} from './ProductCard.styled';

export const FeaturedCollection = () =>
	// const CURRENT_COLLECTION_HANDLE = 'sakura-collection';
	// const {loading, data} = useQuery<
	// 	GetCollectionByHandle,
	// 	GetCollectionByHandleVariables
	// >(GET_COLLECTION_BY_HANDLE, {
	// 	variables: {handle: CURRENT_COLLECTION_HANDLE, first: 8},
	// });
	// const {collectionByHandle} = data ?? {};
	// const {title, description, products} = collectionByHandle ?? {};
	// return (
	// 	<section>
	// 		<h3>{title}</h3>
	// 		<p>{description}</p>
	// 		<LoadingSpinner isLoading={loading} />
	// 		<ProductCardGrid>
	// 			{products?.edges.map(
	// 				({
	// 					node: {
	// 						id,
	// 						handle,
	// 						title,
	// 						images: {edges},
	// 						priceRange: {
	// 							minVariantPrice: {amount, currencyCode},
	// 						},
	// 					},
	// 				}) => (
	// 					<ProductCard
	// 						key={id}
	// 						link={`/product/${handle}`}
	// 						currencyCode={currencyCode}
	// 						price={amount as string}
	// 						thumbnail={edges[0].node.transformedSrc as string}
	// 						title={title}
	// 					/>
	// 				),
	// 			)}
	// 		</ProductCardGrid>
	// 		<ViewCollectionLinkWrapper>
	// 			<ArrowLink
	// 				link={`/collection/${CURRENT_COLLECTION_HANDLE}`}
	// 				text="View Collection"
	// 			/>
	// 		</ViewCollectionLinkWrapper>
	// 	</section>
	// );
	 null;
const ViewCollectionLinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1.5rem 0;
`;

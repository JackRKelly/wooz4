import {GET_COLLECTION_BY_ID} from 'graph';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {useQuery} from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import {colors} from 'const';
import styled from 'styled-components';
import {ProductCard, ProductCardGrid} from './ProductCard';
import {LoadingSpinner} from './LoadingSpinner';

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
				<Link passHref href={`/collection/${CURRENT_COLLECTION_ID}`}>
					<ViewCollectionLink>View collection</ViewCollectionLink>
				</Link>
			</ViewCollectionLinkWrapper>
		</section>
	);
};

const ViewCollectionLink = styled.a`
	display: inline-block;
	color: ${colors.black};
	text-decoration: none;
	text-align: right;
	border: 1px solid ${colors.black};
	padding: 0.4rem 0.8rem;
	border-radius: 4px;
	text-transform: uppercase;
	font-size: 0.8rem;
`;

const ViewCollectionLinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1.5rem 0;
`;

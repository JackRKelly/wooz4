import {GET_COLLECTION_BY_ID} from 'graph';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {useQuery} from '@apollo/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	ProductCardGrid,
	ProductCard,
	ProductCardLink,
	ProductFlex,
	ProductCardImageWrapper,
	ProductCardWrapper,
} from './ProductCard';
import {colors} from 'const';
import styled from 'styled-components';

export const FeaturedCollection = () => {
	const CURRENT_COLLECTION_ID =
		'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM0OTM1OTQwNzM0Mg==';

	const {data} = useQuery<GetCollectionById, GetCollectionByIdVariables>(
		GET_COLLECTION_BY_ID,
		{
			variables: {id: CURRENT_COLLECTION_ID},
		},
	);

	const {collection} = data ?? {};
	const {title, description, products} = collection ?? {};

	return (
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
			<ProductCardGrid>
				{products?.edges.map(
					({
						node: {
							id,
							title,
							images,
							priceRange: {
								minVariantPrice: {amount},
							},
						},
					}) => (
						<ProductCardWrapper key={id}>
							<Link passHref href={`/product/${id}`}>
								<ProductCardLink>
									<ProductCard>
										<ProductFlex>
											<ProductCardImageWrapper>
												<Image
													alt="product"
													src={images?.edges[0].node.transformedSrc as string}
													layout="fill"
												/>
											</ProductCardImageWrapper>
											<span>
												{title} - ${amount}
											</span>
										</ProductFlex>
									</ProductCard>
								</ProductCardLink>
							</Link>
						</ProductCardWrapper>
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
	padding: 0.6rem 0.8rem;
	border-radius: 3px;
	text-transform: uppercase;
	font-size: 0.8rem;
`;

const ViewCollectionLinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1rem 0;
`;

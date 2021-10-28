import {GET_COLLECTION_BY_ID} from 'graph';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {useQuery} from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
						<ProductCard key={id}>
							<Link passHref href={`/product/${id}`}>
								<ProductCardLink>
									<ProductFlex>
										<ProductCardImageWrapper>
											<Image
												alt="product"
												src={images?.edges[0].node.transformedSrc as string}
												layout="fill"
											/>
										</ProductCardImageWrapper>
										<span>
											{title} - {amount}
										</span>
									</ProductFlex>
								</ProductCardLink>
							</Link>
						</ProductCard>
					),
				)}
			</ProductCardGrid>
		</section>
	);
};

const ProductCard = styled.div`
	background-color: white;
	width: 15rem;
	height: 18rem;
	margin-bottom: 20px;
`;

const ProductCardImageWrapper = styled.div`
	width: 15rem;
	height: 15rem;
	position: relative;
`;

const ProductCardGrid = styled.div`
	display: grid;
`;

const ProductFlex = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
`;

const ProductCardLink = styled.a`
	color: black;
	text-decoration: none;
	cursor: pointer;
`;

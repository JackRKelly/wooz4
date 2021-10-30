import {useQuery} from '@apollo/client';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import styled from 'styled-components';
import {ContentColumn} from '../../components/ContentColumn';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {ProductCard} from '../../components/ProductCard';
import {ProductCardGrid} from '../../components/ProductCard.styled';
import {colors} from '../../const';
import {GET_COLLECTION_BY_HANDLE} from '../../graph';
import {
	GetCollectionByHandle,
	GetCollectionByHandleVariables,
} from '../../graph/@types/GetCollectionByHandle';
import {buildTitle} from '../../util/title';

const Collection = () => {
	const router = useRouter();
	const {handle} = router.query;

	const {loading, data} = useQuery<
		GetCollectionByHandle,
		GetCollectionByHandleVariables
	>(GET_COLLECTION_BY_HANDLE, {
		variables: {handle: handle?.toString() ?? ''},
	});

	const {collectionByHandle} = data ?? {};
	const {title, description, products, image} = collectionByHandle ?? {};

	return (
		<>
			<SectionWithBackgroundImage
				backgroundImage={image?.transformedSrc as string}
			>
				<ContentColumnExtraTopPadding>
					<SectionTitle>{title}</SectionTitle>
					<SectionDescription>{description}</SectionDescription>
				</ContentColumnExtraTopPadding>
			</SectionWithBackgroundImage>
			<ContentColumn>
				<Head>
					<title>
						{title
							? buildTitle(`${title}`, 'after')
							: buildTitle('Loading...', 'before')}
					</title>
				</Head>
				<LoadingSpinner isLoading={loading} />
				<ProductCardGrid>
					{products?.edges.map(
						({
							node: {
								id,
								title,
								handle,
								images: {edges},
								priceRange: {
									minVariantPrice: {amount, currencyCode},
								},
							},
						}) => (
							<ProductCard
								key={id}
								currencyCode={currencyCode}
								link={handle ? `/product/${handle}` : '/products'}
								price={amount as string}
								thumbnail={edges[0].node.transformedSrc as string}
								title={title}
							/>
						),
					)}
				</ProductCardGrid>
			</ContentColumn>
		</>
	);
};

const SectionWithBackgroundImage = styled.section<{backgroundImage: string}>`
	background-image: linear-gradient(
			45deg,
			rgba(0, 0, 0, 0.727),
			rgba(0, 0, 0, 0.5)
		),
		url('${props => props.backgroundImage ?? 'none'}');
	background-size: cover;
	background-position: left;
`;

const ContentColumnExtraTopPadding = styled(ContentColumn)`
	padding: 8.5rem 0 5.25rem 0;
`;

const SectionTitle = styled.h2`
	color: ${colors.white};
	text-align: center;
	margin-top: 0;
`;

const SectionDescription = styled.p`
	color: ${colors.white};
	max-width: 800px;
	margin: 0 auto;
`;

export default Collection;

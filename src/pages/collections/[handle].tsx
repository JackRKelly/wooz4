import {NextPageContext} from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import {ContentColumn} from '../../components/ContentColumn';
import {ProductCard} from '../../components/ProductCard';
import {ProductCardGrid} from '../../components/ProductCard.styled';
import {colors} from '../../const';
import {SingleCollection, getSingleCollection} from '../../services/collection';

import {buildTitle} from '../../util/title';
interface Props {
	collection: SingleCollection;
}

const Collection = ({collection}: Props) => {
	const {description, image, products, title} = collection;

	return (
		<>
			<Head>
				<title>
					{title
						? buildTitle(`${title}`, 'after')
						: buildTitle('Loading...', 'before')}
				</title>
			</Head>

			<SectionWithBackgroundImage backgroundImage={image?.src}>
				<ContentColumn padding="5.25rem 0 5.25rem 0">
					<SectionTitle>{title}</SectionTitle>
					<SectionDescription>{description}</SectionDescription>
				</ContentColumn>
			</SectionWithBackgroundImage>
			<ContentColumn>
				<ProductCardGrid>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</ProductCardGrid>
			</ContentColumn>
		</>
	);
};

Collection.getInitialProps = async ({
	query,
}: NextPageContext): Promise<Props> => {
	const handle = query.handle as string;
	const collection = await getSingleCollection(handle);

	return {collection};
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

const SectionTitle = styled.h2`
	color: ${colors.white};
	text-align: center;
	margin-top: 0;
`;

const SectionDescription = styled.p`
	color: ${colors.white};
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;

export default Collection;

import React from 'react';

import {ProductCard} from './ProductCard';
import {ProductCardGrid} from './ProductCard.styled';

import styled from 'styled-components';
import {ArrowLink} from './Link';
import {SingleCollection} from '../services/collection';

interface Props {
	collection: SingleCollection;
	handle: string;
}

export const FeaturedCollection = ({collection, handle}: Props) => {
	const {description, products, title} = collection;

	return (
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
			<ProductCardGrid>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductCardGrid>
			<ViewCollectionLinkWrapper>
				<ArrowLink link={`/collections/${handle}`} text="View Collection" />
			</ViewCollectionLinkWrapper>
		</section>
	);
};

const ViewCollectionLinkWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 1.5rem 0;
`;

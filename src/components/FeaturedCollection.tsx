import React from 'react';

import {ProductCard} from './ProductCard';
import {ProductCardGrid} from './ProductCard.styled';

import styled from 'styled-components';
import {ArrowLink} from './Link';
import {SingleCollection} from '../services/collection';
import {ProductList} from '../services/product';

interface Props {
	collection: SingleCollection;
	productList: ProductList;
	handle: string;
}

export const FeaturedCollection = ({
	collection,
	handle,
	productList,
}: Props) => {
	const {description, title} = collection;

	return (
		<section>
			<h2>{title}</h2>
			<p>{description}</p>
			<ProductCardGrid>
				{productList.products.map(product => (
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

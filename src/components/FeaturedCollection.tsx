import React from 'react';
import {ProductCard} from './ProductCard';
import {ProductCardGrid} from './ProductCard.styled';
import {ArrowLink} from './Link';
import {SingleCollection} from '../services/collection';
import {ProductList} from '../services/product';
import {FlexRowWrapper} from './Flex.styled';

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
			<FlexRowWrapper padding="1.5rem 0" justifyContent="flex-end">
				<ArrowLink link={`/collections/${handle}`} text="View Collection" />
			</FlexRowWrapper>
		</section>
	);
};

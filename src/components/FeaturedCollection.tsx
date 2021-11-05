import React from 'react';
import {ProductCard} from './ProductCard';
import {ProductCardGrid} from './ProductCard.styled';
import {StyledLink} from './Link';
import {SingleCollection} from '../services/collection';
import {ProductList} from '../services/product';
import {FlexRowWrapper} from './Flex.styled';
import {ArrowRight} from '../assets/svg';

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
				<StyledLink
					link={`/collections/${handle}`}
					Icon={<ArrowRight />}
					iconHover="translate(5px)"
				>
					View Collection
				</StyledLink>
			</FlexRowWrapper>
		</section>
	);
};

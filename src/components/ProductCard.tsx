import Link from 'next/link';
import React, {FC} from 'react';
import {ProductListItem} from '../services/product';
import {formatPrice} from '../util/intl';
import {
	ProductCardLink,
	ProductCardWrapper,
	ProductFlex,
	ProductCardImageWrapper,
	ProductTitleWrapper,
	ProductCardTitle,
	ProductCardPrice,
	ProductCardImage,
	Availability,
} from './ProductCard.styled';

interface Props {
	product: ProductListItem;
}

export const ProductCard: FC<Props> = ({product}) => (
	<Link passHref href={product.url}>
		<ProductCardLink>
			<ProductCardWrapper>
				<ProductFlex isDisabled={product.outOfStock}>
					<ProductCardImageWrapper>
						<ProductCardImage
							alt={product.image.alt}
							src={product.image.src}
							layout="fill"
						/>
					</ProductCardImageWrapper>
				</ProductFlex>
				{product.outOfStock ? <Availability>Unavailable</Availability> : null}
			</ProductCardWrapper>
			<ProductTitleWrapper>
				<ProductCardTitle>{product.title}</ProductCardTitle>
				<ProductCardPrice>{formatPrice(product.price)}</ProductCardPrice>
			</ProductTitleWrapper>
		</ProductCardLink>
	</Link>
);

export * from './ProductCard.styled';

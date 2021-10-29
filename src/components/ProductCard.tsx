import Link from 'next/link';
import React, {FC} from 'react';
import {formatPrice} from 'util/formatPrice';
import {
	ProductCardLink,
	ProductCardWrapper,
	ProductFlex,
	ProductCardImageWrapper,
	ProductTitleWrapper,
	ProductCardTitle,
	ProductCardPrice,
	ProductCardImage,
} from './ProductCard.styled';

interface Props {
	link: string;
	title: string;
	price: string;
	currencyCode: string;
	thumbnail: string;
}

export const ProductCard: FC<Props> = ({
	link,
	title,
	price,
	currencyCode,
	thumbnail,
}) => (
	<Link passHref href={link}>
		<ProductCardLink>
			<ProductCardWrapper>
				<ProductFlex>
					<ProductCardImageWrapper>
						<ProductCardImage alt="product" src={thumbnail} layout="fill" />
					</ProductCardImageWrapper>
				</ProductFlex>
			</ProductCardWrapper>
			<ProductTitleWrapper>
				<ProductCardTitle>{title}</ProductCardTitle>
				<ProductCardPrice>{formatPrice(price, currencyCode)}</ProductCardPrice>
			</ProductTitleWrapper>
		</ProductCardLink>
	</Link>
);

export * from './ProductCard.styled';

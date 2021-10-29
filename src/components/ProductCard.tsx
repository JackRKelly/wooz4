import Link from 'next/link';
import React, {FC} from 'react';
import Image from 'next/image';
import {
	ProductCardStyled,
	ProductCardLink,
	ProductCardWrapper,
	ProductFlex,
	ProductCardImageWrapper,
	ProductTitleWrapper,
	ProductCardTitle,
	ProductCardPrice,
} from './ProductCard.styled';

interface Props {
	link: string;
	title: string;
	price: string;
	thumbnail: string;
}

export const ProductCard: FC<Props> = ({link, title, price, thumbnail}) => (
	<Link passHref href={link}>
		<ProductCardLink>
			<ProductCardWrapper>
				<ProductCardStyled>
					<ProductFlex>
						<ProductCardImageWrapper>
							<Image alt="product" src={thumbnail} layout="fill" />
						</ProductCardImageWrapper>
					</ProductFlex>
				</ProductCardStyled>
			</ProductCardWrapper>
			<ProductTitleWrapper>
				<ProductCardTitle>{title}</ProductCardTitle>
				<ProductCardPrice>${price}</ProductCardPrice>
			</ProductTitleWrapper>
		</ProductCardLink>
	</Link>
);

export * from './ProductCard.styled';

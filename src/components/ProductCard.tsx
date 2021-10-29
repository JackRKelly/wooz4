import Link from 'next/link';
import React, {FC} from 'react';
import {
	ProductCardStyled,
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
				<ProductCardStyled>
					<ProductFlex>
						<ProductCardImageWrapper>
							<ProductCardImage
								alt="product"
								src={thumbnail}
								layout="fill"
								objectFit="cover"
							/>
						</ProductCardImageWrapper>
					</ProductFlex>
				</ProductCardStyled>
			</ProductCardWrapper>
			<ProductTitleWrapper>
				<ProductCardTitle>{title}</ProductCardTitle>
				<ProductCardPrice>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: currencyCode ?? 'USD',
					}).format(parseInt(price, 10))}
				</ProductCardPrice>
			</ProductTitleWrapper>
		</ProductCardLink>
	</Link>
);

export * from './ProductCard.styled';

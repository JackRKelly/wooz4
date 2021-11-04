import Link from 'next/link';
import React, {FC} from 'react';
import styled from 'styled-components';
import {Close} from '../assets/svg';
import {colors} from '../const';
import {ProductListItem} from '../services/product';
import {formatPrice} from '../util/intl';
import {StyledButton} from './Button';
import {FlexRowWrapper} from './Flex.styled';
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
	product: ProductListItem;
}

const CenterWrapper = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0.8;
`;

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
				{product.outOfStock ? (
					<CenterWrapper>
						<FlexRowWrapper justifyContent="center">
							<StyledButton
								iconColor={colors.red}
								color={colors.red}
								borderColor={colors.red}
								backgroundColor="transparent"
								fontSize="0.9rem"
								padding="0.3rem 0.9rem"
								Icon={<Close />}
							>
								Unavailable
							</StyledButton>
						</FlexRowWrapper>
					</CenterWrapper>
				) : null}
			</ProductCardWrapper>
			<ProductTitleWrapper>
				<ProductCardTitle>{product.title}</ProductCardTitle>
				<ProductCardPrice>{formatPrice(product.price)}</ProductCardPrice>
			</ProductTitleWrapper>
		</ProductCardLink>
	</Link>
);

export * from './ProductCard.styled';

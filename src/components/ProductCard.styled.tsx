import {colors, transitions} from 'const';
import Image from 'next/image';
import styled from 'styled-components';
import {FlexRowWrapper} from './Styled';

export const ProductCardStyled = styled.div`
	background-color: ${colors.lighterGray};
	width: 100%;
	height: 100%;
	border-radius: 3px;
`;

export const ProductCardImage = styled(Image)`
	border-radius: 3px;
	filter: drop-shadow(3px 6px 5px rgba(0, 0, 0, 0.15));
`;

export const ProductCardImageWrapper = styled.div`
	width: 100%;
	min-height: 15rem;
	position: relative;
`;

export const ProductCardGrid = styled.div`
	width: 100%;
	display: grid;
	justify-items: stretch;
	column-gap: 1rem;
	row-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const ProductFlex = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

export const ProductCardLink = styled.a`
	color: black;
	text-decoration: none;
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: block;
`;

export const ProductCardTitle = styled.span`
	font-size: 0.8rem;
`;

export const ProductCardPrice = styled.span`
	font-size: 0.9rem;
	color: ${colors.darkGray};
	font-style: italic;
	padding-right: 0.1rem;
`;

export const ProductTitleWrapper = styled(FlexRowWrapper)`
	padding-top: 1rem;
`;

export const ProductCardWrapper = styled.div`
	transition: ${transitions.easeInOutShort};
	&:hover {
		transform: translate(0, -3px);
	}
`;

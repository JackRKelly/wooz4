import {colors, transitions} from 'const';
import styled from 'styled-components';
import {FlexRowWrapper} from './Styled';

export const ProductCardStyled = styled.div`
	background-color: ${colors.lighterGray};
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	border-radius: 3px;
`;

export const ProductCardImageWrapper = styled.div`
	width: 12rem;
	height: 12rem;
	position: relative;
	filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.04));
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
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.03);
	&:hover {
		box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.06);
		transform: translate(0, -3px);
	}
`;

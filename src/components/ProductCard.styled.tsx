import Image from 'next/image';
import styled from 'styled-components';
import {colors, transitions} from '../const';
import {FlexRowWrapper} from './Flex.styled';

export const ProductCardImage = styled(Image)`
	border-radius: 3px;
	filter: drop-shadow(3px 6px 5px rgba(0, 0, 0, 0.15));
	//!important to override 'next/image' normalization
	padding: 0.8rem !important;
`;

export const ProductCardImageWrapper = styled.div`
	min-height: 15rem;
	min-width: 15rem;
	position: relative;
`;

export const ProductCardGrid = styled.div`
	width: 100%;
	display: grid;
	justify-items: stretch;
	column-gap: 1rem;
	row-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

export const ProductFlex = styled.div<{isDisabled?: boolean}>`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	opacity: ${props => (props.isDisabled ? '.2' : '1')};
`;

export const ProductCardLink = styled.a`
	color: black;
	text-decoration: none;
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: block;
	max-width: 25rem;
	margin: 0 auto;
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
	position: relative;
	background-color: ${colors.lighterGray};
	border-radius: 3px;
	transition: ${transitions.easeInOutShort};
	&:hover {
		transform: translate(0, -3px);
	}
`;

export const Availability = styled.span`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) skew(-7deg);
	z-index: 5;
	color: ${colors.red};
	padding: 4px 8px;
	border: 3px solid red;
	border-radius: 3px;
	text-transform: uppercase;
	font-weight: bold;
`;

import styled from 'styled-components';
import {columnWidth, breakpoints, colors, transitions} from '../../const';
import {FlexColumnWrapper} from '../Flex.styled';
import {NormalizedIconLink} from '../Normalized.styled';
import React, {FC} from 'react';
import {Cart} from '../../assets/svg';
import Link from 'next/link';

export const StyledNavigation = styled.nav`
	${columnWidth}
`;

export const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;

	@media (max-width: ${breakpoints.lg}px) {
		display: block;
	}
`;

export const NavigationWrapper = styled.div`
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: ${colors.white};
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
	height: 3.125rem;

	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(255, 255, 255, 0.7);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
`;

interface StyledLinkProps {
	active: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
	display: block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;
	position: relative;

	&:nth-child(2n + 1) {
		&::after {
			background-color: ${props => (props.active ? colors.red : colors.gray)};
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: ${props => (props.active ? '90%' : '0%')};
		height: 1.5px;
		background-color: ${props => (props.active ? colors.blue : colors.gray)};
		transition: ${transitions.easeInOutShort};
	}

	&:hover::after {
		width: 90%;
	}
`;

export const StyledFullscreenNavigation = styled.div<{open: boolean}>`
	transition: ${transitions.easeInOutMedium};
	position: fixed;
	top: 0;
	width: 100vw;
	right: ${props => (props.open ? '0' : '-200%')};
	bottom: 0;
	background-color: white;
	z-index: 11;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FlexColumnWrapperHeight = styled(FlexColumnWrapper)`
	height: 50%;
`;
export const StyledDesktopNavigation = styled(StyledNavigation)`
	display: none;

	@media (min-width: ${breakpoints.lg}px) {
		display: block;
	}
`;

export const NavigationPlaceholder = styled.div`
	height: 3.125rem;
	background-color: ${colors.white};
	width: 100%;
`;

export const CartLink = styled(NormalizedIconLink)`
	position: relative;
`;

export const CartIconCount = styled.span`
	font-size: 0.6rem;
	position: absolute;
	top: 0.2rem;
	right: 0;
	width: 1rem;
	height: 1rem;
	background-color: ${colors.red};
	color: ${colors.white};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CartIconLink: FC<{close?: () => void; itemCount: number}> = ({
	close,
	itemCount,
}) => (
	<Link passHref href="/cart">
		<CartLink onClick={close}>
			<Cart />
			{itemCount === 0 ? null : <CartIconCount>{itemCount}</CartIconCount>}
		</CartLink>
	</Link>
);

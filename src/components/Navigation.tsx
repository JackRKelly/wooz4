import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {colors} from 'constants/colors';
import {transitions} from 'constants/transitions';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Navigation = () => (
	<StyledNavigation>
		<FlexWrapper>
			<div>
				<Link passHref href="/">
					<a>
						<RBWoozLogo />
					</a>
				</Link>
			</div>
			<div>
				<Link passHref href="/">
					<StyledLink>Home</StyledLink>
				</Link>
				<Link passHref href="/shop">
					<StyledLink>Shop</StyledLink>
				</Link>
				<Link passHref href="/">
					<StyledLink>Contact</StyledLink>
				</Link>
			</div>
			<div>
				<Link passHref href="/">
					<StyledLink>Cart</StyledLink>
				</Link>
			</div>
		</FlexWrapper>
	</StyledNavigation>
);

const StyledNavigation = styled.nav`
	width: 50%;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledLink = styled.a`
	display: inline-block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;
	position: relative;

	/* &:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	} */

	&::after {
		content: '';
		position: absolute;
		bottom: 0.5rem;
		left: 50%;
		transform: translateX(-50%);
		width: 0%;
		height: 1.5px;
		background-color: ${colors.black};
		transition: ${transitions.easeInOutShort};
	}
	&:hover::after {
		width: 90%;
	}
`;

import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {NavigationLink} from './NavigationLink';

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
				<NavigationLink text="Home" route="/" />
				<NavigationLink text="Shop" route="/shop" />
				<NavigationLink text="Contact" route="/contact" />
			</div>
			<div>
				<NavigationLink text="Cart" route="/cart" />
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
	z-index: 10;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
		@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
			background: rgba(255, 255, 255, 0.7);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(10px);
		}
		width: 100vw;
		height: 100%;
		z-index: -1;
	}
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

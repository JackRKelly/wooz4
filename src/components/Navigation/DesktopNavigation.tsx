import React, {FC, useState} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink, StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'const';
import styled from 'styled-components';
import {
	FlexRowWrapper,
	NormalizedIconLink,
	NormalizedIconButton,
} from 'components/Styled';
import {Cart, Search} from 'assets/svg';
import Link from 'next/link';

export const DesktopNavigation: FC = () => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);

	return (
		<StyledDesktopNavigation>
			<FlexRowWrapper>
				<FlexRowWrapper>
					<Link passHref href="/">
						<a>
							<RBWoozLogo />
						</a>
					</Link>
				</FlexRowWrapper>
				<FlexRowWrapper>
					<NavigationLink text="Home" route="/" />
					<NavigationLink text="Shop" route="/shop" />
					<NavigationLink text="Contact" route="/contact" />
				</FlexRowWrapper>
				<FlexRowWrapper>
					<NormalizedIconButton
						onMouseEnter={() => {
							setIsHoveringSearch(true);
						}}
						onMouseLeave={() => {
							setIsHoveringSearch(false);
						}}
					>
						<Search active={isHoveringSearch} />
					</NormalizedIconButton>
					<Link passHref href="/cart">
						<NormalizedIconLink>
							<Cart />
						</NormalizedIconLink>
					</Link>
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledDesktopNavigation>
	);
};

export const StyledDesktopNavigation = styled(StyledNavigation)`
	display: none;
	@media (min-width: ${breakpoints.md}px) {
		display: block;
	}
`;

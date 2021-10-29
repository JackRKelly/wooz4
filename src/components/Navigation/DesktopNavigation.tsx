import React, {FC, useState} from 'react';
import {NavigationLink, StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'const';
import styled from 'styled-components';
import {Cart, Search, WoozBadge} from 'assets/svg';
import Link from 'next/link';
import {FlexRowWrapper} from 'components/Flex.styled';
import {
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Normalized.styled';

export const DesktopNavigation: FC = () => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);

	return (
		<StyledDesktopNavigation>
			<FlexRowWrapper>
				<FlexRowWrapper>
					<Link passHref href="/">
						<a>
							<WoozBadge />
						</a>
					</Link>
				</FlexRowWrapper>
				<FlexRowWrapper>
					<NavigationLink text="Home" route="/" />
					<NavigationLink text="Products" route="/products" />
					<NavigationLink text="Collections" route="/collections" />
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

import React, {FC, useState} from 'react';
import {NavigationLink} from 'components/Navigation/NavigationLink';
import {Cart, Search, WoozBadge} from 'assets/svg';
import Link from 'next/link';
import {FlexRowWrapper} from 'components/Flex.styled';
import {
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Normalized.styled';
import {StyledDesktopNavigation} from 'components/Navigation/Navigation.styled';

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

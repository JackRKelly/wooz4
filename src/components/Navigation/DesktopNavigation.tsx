import Link from 'next/link';
import React, {FC, useState} from 'react';
import {WoozBadge, Search, Cart} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton, NormalizedIconLink} from '../Normalized.styled';
import {StyledDesktopNavigation} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

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

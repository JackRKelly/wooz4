import Link from 'next/link';
import React, {FC, useState} from 'react';
import {WoozBadge, Search} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton} from '../Normalized.styled';
import {CartIconLink, StyledDesktopNavigation} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const DesktopNavigation: FC<{itemCount: number}> = ({itemCount}) => {
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
						{/* https://www.shopify.com/partners/blog/query-argument-graphql */}
						<Search active={isHoveringSearch} />
					</NormalizedIconButton>

					<CartIconLink itemCount={itemCount} />
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledDesktopNavigation>
	);
};

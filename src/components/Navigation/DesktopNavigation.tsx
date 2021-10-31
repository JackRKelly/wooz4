import Link from 'next/link';
import React, {FC, useState} from 'react';
import {useQuery} from 'react-query';
import {WoozBadge, Search, Cart} from '../../assets/svg';
import {CART_ITEM_COUNT_QUERY} from '../../const/query';
import {getItemCount} from '../../services/cart';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton, NormalizedIconLink} from '../Normalized.styled';
import {StyledDesktopNavigation} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const DesktopNavigation: FC = () => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);
	const itemCount = useQuery(CART_ITEM_COUNT_QUERY, async () => getItemCount());

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
							{itemCount.data}
						</NormalizedIconLink>
					</Link>
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledDesktopNavigation>
	);
};

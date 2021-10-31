import Link from 'next/link';
import React, {FC, useState} from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components';
import {WoozBadge, Search, Cart} from '../../assets/svg';
import {colors} from '../../const';
import {CART_ITEM_COUNT_QUERY} from '../../const/query';
import {getCartItemCount} from '../../services/cart';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton, NormalizedIconLink} from '../Normalized.styled';
import {StyledDesktopNavigation} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const DesktopNavigation: FC = () => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);
	const itemCount = useQuery(CART_ITEM_COUNT_QUERY, async () =>
		getCartItemCount(),
	);

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
					<Link passHref href="/cart">
						<CartIconLink>
							<Cart />
							{itemCount.data === 0 ? null : (
								<CartIconCount>{itemCount.data}</CartIconCount>
							)}
						</CartIconLink>
					</Link>
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledDesktopNavigation>
	);
};

const CartIconLink = styled(NormalizedIconLink)`
	position: relative;
`;

const CartIconCount = styled.span`
	font-size: 0.6rem;
	position: absolute;
	top: 0.2rem;
	right: 0;
	width: 1rem;
	height: 1rem;
	background-color: ${colors.sakuraRed};
	color: ${colors.white};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

import Link from 'next/link';
import React, {FC} from 'react';
import {WoozLogo, Search} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {
	CartIconLink,
	SearchGlass,
	StyledDesktopNavigation,
} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const DesktopNavigation: FC<{itemCount: number}> = ({itemCount}) => (
	<StyledDesktopNavigation>
		<FlexRowWrapper>
			<FlexRowWrapper>
				<Link passHref href="/">
					<a>
						<WoozLogo />
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
				<Link passHref href="/products/search">
					<SearchGlass>
						<Search />
					</SearchGlass>
				</Link>

				<CartIconLink itemCount={itemCount} />
			</FlexRowWrapper>
		</FlexRowWrapper>
	</StyledDesktopNavigation>
);

import Link from 'next/link';
import React, {FC} from 'react';
import {WoozLogo, Search, Hamburger} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton} from '../Normalized.styled';
import {
	CartIconLink,
	SearchGlass,
	StyledMobileNavigation,
} from './Navigation.styled';

export const MobileNavigation: FC<{itemCount: number; open: () => void}> = ({
	open,
	itemCount,
}) => (
	<StyledMobileNavigation>
		<FlexRowWrapper>
			<div>
				<Link passHref href="/">
					<a>
						<WoozLogo />
					</a>
				</Link>
			</div>

			<FlexRowWrapper>
				<Link passHref href="/products/search">
					<SearchGlass>
						<Search />
					</SearchGlass>
				</Link>

				<CartIconLink itemCount={itemCount} />

				<NormalizedIconButton type="button" onClick={open}>
					<Hamburger />
				</NormalizedIconButton>
			</FlexRowWrapper>
		</FlexRowWrapper>
	</StyledMobileNavigation>
);

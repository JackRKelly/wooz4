import Link from 'next/link';
import React, {FC} from 'react';
import {Close, Search, Cart, WoozBadge} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton, NormalizedIconLink} from '../Normalized.styled';
import {
	StyledFullscreenNavigation,
	FlexColumnWrapperHeight,
} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const FullscreenNavigation: FC<{
	open: boolean;
	close: () => void;
}> = ({open, close}) => (
	<StyledFullscreenNavigation open={open}>
		<FlexColumnWrapperHeight>
			<NormalizedIconButton type="button" onClick={close}>
				<Close />
			</NormalizedIconButton>

			<FlexRowWrapper>
				<NormalizedIconButton>
					<Search />
				</NormalizedIconButton>
				<Link passHref href="/cart">
					<NormalizedIconLink onClick={close}>
						<Cart />
					</NormalizedIconLink>
				</Link>
			</FlexRowWrapper>

			<NavigationLink text="Home" route="/" onClick={close} />
			<NavigationLink text="Products" route="/products" onClick={close} />
			<NavigationLink text="Collections" route="/collections" onClick={close} />
			<NavigationLink text="Contact" route="/contact" onClick={close} />

			<Link passHref href="/">
				<a onClick={close}>
					<WoozBadge />
				</a>
			</Link>
		</FlexColumnWrapperHeight>
	</StyledFullscreenNavigation>
);

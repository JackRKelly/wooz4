import Link from 'next/link';
import React, {FC} from 'react';
import {Close, Search, WoozBadge} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton} from '../Normalized.styled';
import {
	StyledFullscreenNavigation,
	FlexColumnWrapperHeight,
	CartIconLink,
} from './Navigation.styled';
import {NavigationLink} from './NavigationLink';

export const FullscreenNavigation: FC<{
	open: boolean;
	itemCount: number;
	close: () => void;
}> = ({open, close, itemCount}) => (
	<StyledFullscreenNavigation open={open}>
		<FlexColumnWrapperHeight>
			<NormalizedIconButton type="button" onClick={close}>
				<Close />
			</NormalizedIconButton>

			<FlexRowWrapper>
				<NormalizedIconButton>
					<Search />
				</NormalizedIconButton>

				<CartIconLink close={close} itemCount={itemCount} />
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

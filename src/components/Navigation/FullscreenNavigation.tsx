import Link from 'next/link';
import React, {FC} from 'react';
import {NavigationLink} from 'components/Navigation';
import styled from 'styled-components';
import {transitions} from 'const';
import {Cart, Close, RBWoozLogo, Search} from 'assets/svg';
import {FlexRowWrapper, FlexColumnWrapper} from 'components/Flex.styled';
import {
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Normalized.styled';

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
					<RBWoozLogo />
				</a>
			</Link>
		</FlexColumnWrapperHeight>
	</StyledFullscreenNavigation>
);

export const StyledFullscreenNavigation = styled.div<{open: boolean}>`
	transition: ${transitions.easeInOutMedium};
	position: fixed;
	top: 0;

	width: 100vw;
	right: ${props => (props.open ? '0' : '-200%')};
	bottom: 0;
	background-color: white;
	z-index: 11;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FlexColumnWrapperHeight = styled(FlexColumnWrapper)`
	height: 50%;
`;

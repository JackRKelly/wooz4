import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink} from 'components/Navigation';
import styled from 'styled-components';
import {transitions} from 'constants/transitions';
import {FlexColumnWrapper} from 'components/Styled/FlexColumnWrapper';

export const FullscreenNavigation: FC<{
	open: boolean;
	close: () => void;
}> = ({open, close}) => (
	<StyledFullscreenNavigation open={open}>
		<FlexColumnWrapperHeight>
			<Link passHref href="/">
				<a onClick={close}>
					<RBWoozLogo />
				</a>
			</Link>
			<NavigationLink text="Home" route="/" onClick={close} />
			<NavigationLink text="Shop" route="/shop" onClick={close} />
			<NavigationLink text="Contact" route="/contact" onClick={close} />
			<NavigationLink text="Cart" route="/cart" onClick={close} />
			<button type="button" onClick={close}>
				X
			</button>
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

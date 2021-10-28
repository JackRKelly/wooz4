import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink} from 'components/Navigation';
import styled from 'styled-components';
import {transitions} from 'constants/transitions';
import {FlexColumnWrapper} from 'components/Styled/FlexColumnWrapper';
import {Cart} from 'assets/svg/Cart';
import {useRouter} from 'next/router';

export const FullscreenNavigation: FC<{
	open: boolean;
	close: () => void;
}> = ({open, close}) => {
	const router = useRouter();

	return (
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
				<Link passHref href="/cart">
					<a onClick={close}>
						<Cart active={router.pathname === '/cart'} />
					</a>
				</Link>
				<button type="button" onClick={close}>
					X
				</button>
			</FlexColumnWrapperHeight>
		</StyledFullscreenNavigation>
	);
};

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

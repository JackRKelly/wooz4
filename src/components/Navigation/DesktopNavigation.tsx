import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink, StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'constants/breakpoints';
import styled from 'styled-components';
import {FlexRowWrapper} from 'components/Styled/FlexRowWrapper';
import {Cart} from 'assets/svg/Cart';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const DesktopNavigation: FC = () => {
	const router = useRouter();

	return (
		<StyledDesktopNavigation>
			<FlexRowWrapper>
				<div>
					<Link passHref href="/">
						<a>
							<RBWoozLogo />
						</a>
					</Link>
				</div>
				<FlexRowWrapper>
					<NavigationLink text="Home" route="/" />
					<NavigationLink text="Shop" route="/shop" />
					<NavigationLink text="Contact" route="/contact" />
				</FlexRowWrapper>
				<div>
					<Link passHref href="/cart">
						<a>
							<Cart active={router.pathname === '/cart'} />
						</a>
					</Link>
				</div>
			</FlexRowWrapper>
		</StyledDesktopNavigation>
	);
};

export const StyledDesktopNavigation = styled(StyledNavigation)`
	display: none;
	@media (min-width: ${breakpoints.md}px) {
		display: block;
	}
`;

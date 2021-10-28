import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink, StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'constants/breakpoints';
import styled from 'styled-components';
import {FlexRowWrapper} from 'components/Styled/FlexRowWrapper';

export const DesktopNavigation: FC = () => (
	<StyledDesktopNavigation>
		<FlexRowWrapper>
			<div>
				<Link passHref href="/">
					<a>
						<RBWoozLogo />
					</a>
				</Link>
			</div>
			<div>
				<NavigationLink text="Home" route="/" />
				<NavigationLink text="Shop" route="/shop" />
				<NavigationLink text="Contact" route="/contact" />
			</div>
			<div>
				<NavigationLink text="Cart" route="/cart" />
			</div>
		</FlexRowWrapper>
	</StyledDesktopNavigation>
);

export const StyledDesktopNavigation = styled(StyledNavigation)`
	display: none;
	@media (min-width: ${breakpoints.md}px) {
		display: block;
	}
`;

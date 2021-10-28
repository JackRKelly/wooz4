import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {NavigationLink, StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'constants/breakpoints';
import styled from 'styled-components';
import {FlexRowWrapper} from 'components/Styled/FlexRowWrapper';

export const MobileNavigation: FC<{open: () => void}> = ({open}) => (
	<StyledMobileNavigation>
		<FlexRowWrapper>
			<div>
				<Link passHref href="/">
					<a>
						<RBWoozLogo />
					</a>
				</Link>
			</div>

			<div>
				<NavigationLink text="Cart" route="/cart" />

				<button type="button" onClick={open}>
					open
				</button>
			</div>
		</FlexRowWrapper>
	</StyledMobileNavigation>
);

const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;
	@media (max-width: ${breakpoints.md}px) {
		display: block;
	}
`;

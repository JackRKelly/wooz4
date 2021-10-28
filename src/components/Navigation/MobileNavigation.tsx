import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'const';
import styled from 'styled-components';
import {
	FlexRowWrapper,
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Styled';
import {Hamburger} from 'assets/svg/Icons/Hamburger';
import {Cart} from 'assets/svg/Icons/Cart';
import {Search} from 'assets/svg';

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

			<FlexRowWrapper>
				<NormalizedIconButton>
					<Search />
				</NormalizedIconButton>

				<Link passHref href="/cart">
					<NormalizedIconLink>
						<Cart />
					</NormalizedIconLink>
				</Link>

				<NormalizedIconButton type="button" onClick={open}>
					<Hamburger />
				</NormalizedIconButton>
			</FlexRowWrapper>
		</FlexRowWrapper>
	</StyledMobileNavigation>
);

const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;
	@media (max-width: ${breakpoints.md}px) {
		display: block;
	}
`;

import Link from 'next/link';
import React, {FC} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'constants/breakpoints';
import styled from 'styled-components';
import {FlexRowWrapper} from 'components/Styled/FlexRowWrapper';
import {Hamburger} from 'assets/svg/Hamburger';
import {Cart} from 'assets/svg/Cart';
import {useRouter} from 'next/router';

export const MobileNavigation: FC<{open: () => void}> = ({open}) => {
	const router = useRouter();

	return (
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
					<Link passHref href="/cart">
						<a>
							<Cart active={router.pathname === '/cart'} />
						</a>
					</Link>

					<StyledButton type="button" onClick={open}>
						<Hamburger />
					</StyledButton>
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledMobileNavigation>
	);
};

const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;
	@media (max-width: ${breakpoints.md}px) {
		display: block;
	}
`;

const StyledButton = styled.button`
	background-color: transparent;
	border-radius: 0;
	border: none;
	padding: 0 0 0 1rem;
	cursor: pointer;
`;

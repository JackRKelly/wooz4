import Link from 'next/link';
import React, {FC, useState} from 'react';
import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {StyledNavigation} from 'components/Navigation';
import {breakpoints} from 'const';
import styled from 'styled-components';
import {Hamburger} from 'assets/svg/Icons/Hamburger';
import {Cart} from 'assets/svg/Icons/Cart';
import {Search} from 'assets/svg';
import {FlexRowWrapper} from 'components/Flex.styled';
import {
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Normalized.styled';

export const MobileNavigation: FC<{open: () => void}> = ({open}) => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);

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
					<NormalizedIconButton
						onMouseEnter={() => {
							setIsHoveringSearch(true);
						}}
						onMouseLeave={() => {
							setIsHoveringSearch(false);
						}}
					>
						<Search active={isHoveringSearch} />
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
};

const StyledMobileNavigation = styled(StyledNavigation)`
	display: none;
	@media (max-width: ${breakpoints.md}px) {
		display: block;
	}
`;

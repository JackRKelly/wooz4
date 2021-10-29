import Link from 'next/link';
import React, {FC, useState} from 'react';
import {Cart, Hamburger, Search, WoozBadge} from 'assets/svg';
import {FlexRowWrapper} from 'components/Flex.styled';
import {
	NormalizedIconButton,
	NormalizedIconLink,
} from 'components/Normalized.styled';
import {StyledMobileNavigation} from 'components/Navigation/Navigation.styled';

export const MobileNavigation: FC<{open: () => void}> = ({open}) => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);

	return (
		<StyledMobileNavigation>
			<FlexRowWrapper>
				<div>
					<Link passHref href="/">
						<a>
							<WoozBadge />
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

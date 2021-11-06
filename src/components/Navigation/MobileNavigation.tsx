import Link from 'next/link';
import React, {FC, useState} from 'react';
import {WoozLogo, Search, Hamburger} from '../../assets/svg';
import {FlexRowWrapper} from '../Flex.styled';
import {NormalizedIconButton} from '../Normalized.styled';
import {CartIconLink, StyledMobileNavigation} from './Navigation.styled';

export const MobileNavigation: FC<{itemCount: number; open: () => void}> = ({
	open,
	itemCount,
}) => {
	const [isHoveringSearch, setIsHoveringSearch] = useState(false);

	return (
		<StyledMobileNavigation>
			<FlexRowWrapper>
				<div>
					<Link passHref href="/">
						<a>
							<WoozLogo />
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

					<CartIconLink itemCount={itemCount} />

					<NormalizedIconButton type="button" onClick={open}>
						<Hamburger />
					</NormalizedIconButton>
				</FlexRowWrapper>
			</FlexRowWrapper>
		</StyledMobileNavigation>
	);
};

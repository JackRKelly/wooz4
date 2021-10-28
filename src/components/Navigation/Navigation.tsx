import {breakpoints} from 'constants/breakpoints';
import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {
	DesktopNavigation,
	FullscreenNavigation,
	MobileNavigation,
} from 'components/Navigation';

export const Navigation: FC = () => {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	return (
		<>
			<FullscreenNavigation
				open={isNavigationOpen}
				close={() => {
					setIsNavigationOpen(false);
				}}
			/>
			<MobileNavigation
				open={() => {
					setIsNavigationOpen(true);
				}}
			/>
			<DesktopNavigation />
		</>
	);
};

export const StyledNavigation = styled.nav`
	width: 90%;
	@media (min-width: ${breakpoints.sm}px) {
		width: 80%;
	}

	@media (min-width: ${breakpoints.md}px) {
		width: 70%;
	}

	@media (min-width: ${breakpoints.lg}px) {
		width: 60%;
	}

	@media (min-width: ${breakpoints.xl}px) {
		width: 50%;
	}
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
		@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
			background: rgba(255, 255, 255, 0.7);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(10px);
		}
		width: 100vw;
		height: 100%;
		z-index: -1;
	}
`;

import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {
	DesktopNavigation,
	FullscreenNavigation,
	MobileNavigation,
} from 'components/Navigation';
import {columnWidth} from 'const';

export const Navigation: FC = () => {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isNavigationOpen ? 'hidden' : 'auto';
	}, [isNavigationOpen]);

	return (
		<>
			<FullscreenNavigation
				open={isNavigationOpen}
				close={() => {
					setIsNavigationOpen(false);
				}}
			/>
			<NavigationWrapper>
				<MobileNavigation
					open={() => {
						setIsNavigationOpen(true);
					}}
				/>
				<DesktopNavigation />
			</NavigationWrapper>
		</>
	);
};

export const StyledNavigation = styled.nav`
	${columnWidth}
`;

const NavigationWrapper = styled.div`
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(255, 255, 255, 0.7);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
`;

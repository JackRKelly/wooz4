import React, {FC, useEffect, useState} from 'react';
import {DesktopNavigation} from './DesktopNavigation';
import {FullscreenNavigation} from './FullscreenNavigation';
import {MobileNavigation} from './MobileNavigation';
import {NavigationWrapper} from './Navigation.styled';

export const Navigation: FC = () => {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	useEffect(() => {
		document.body.className = isNavigationOpen ? 'scroll-hidden' : '';
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

import React, {FC, useEffect, useState} from 'react';
import {DesktopNavigation} from 'components/Navigation/DesktopNavigation';
import {FullscreenNavigation} from 'components/Navigation/FullscreenNavigation';
import {MobileNavigation} from 'components/Navigation/MobileNavigation';
import {NavigationWrapper} from 'components/Navigation/Navigation.styled';

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

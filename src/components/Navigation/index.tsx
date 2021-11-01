import React, {FC, useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {CART_ITEM_COUNT_QUERY} from '../../const/query';
import {getCartItemCount} from '../../services/cart';
import {DesktopNavigation} from './DesktopNavigation';
import {FullscreenNavigation} from './FullscreenNavigation';
import {MobileNavigation} from './MobileNavigation';
import {NavigationWrapper} from './Navigation.styled';

export const Navigation: FC = () => {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	useEffect(() => {
		document.body.className = isNavigationOpen ? 'scroll-hidden' : '';
	}, [isNavigationOpen]);

	const itemCount = useQuery(CART_ITEM_COUNT_QUERY, async () =>
		getCartItemCount(),
	);

	return (
		<>
			<FullscreenNavigation
				itemCount={itemCount.data ?? 0}
				open={isNavigationOpen}
				close={() => {
					setIsNavigationOpen(false);
				}}
			/>
			<NavigationWrapper>
				<MobileNavigation
					itemCount={itemCount.data ?? 0}
					open={() => {
						setIsNavigationOpen(true);
					}}
				/>
				<DesktopNavigation itemCount={itemCount.data ?? 0} />
			</NavigationWrapper>
		</>
	);
};

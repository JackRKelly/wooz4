import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import {StyledLink} from 'components/Navigation/Navigation.styled';

interface NavigationLinkProps {
	route: string;
	text: string;
	onClick?: () => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
	route,
	text,
	onClick,
}) => {
	const router = useRouter();

	return (
		<Link passHref href={route}>
			<StyledLink active={router.pathname === route} onClick={onClick}>
				{text}
			</StyledLink>
		</Link>
	);
};

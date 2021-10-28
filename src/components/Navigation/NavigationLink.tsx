import {colors} from 'constants/colors';
import {transitions} from 'constants/transitions';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import styled from 'styled-components';

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

interface StyledLinkProps {
	active: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
	display: block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;
	position: relative;

	&:nth-child(2n + 1) {
		&::after {
			background-color: ${props =>
				props.active ? colors.sakuraRed : colors.gray};
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: ${props => (props.active ? '90%' : '0%')};
		height: 1.5px;
		background-color: ${props =>
			props.active ? colors.sakuraBlue : colors.gray};
		transition: ${transitions.easeInOutShort};
	}

	&:hover::after {
		width: 90%;
	}
`;

import {colors} from 'constants/colors';
import {transitions} from 'constants/transitions';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import styled from 'styled-components';

interface NavigationLinkProps {
	route: string;
	text: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({route, text}) => {
	const router = useRouter();

	return (
		<Link passHref href={route}>
			<StyledLink active={router.pathname === route}>{text}</StyledLink>
		</Link>
	);
};

interface StyledLinkProps {
	active: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
	display: inline-block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;
	position: relative;

	&:nth-child(2n + 1) {
		&::after {
			background-color: ${props =>
				props.active ? colors.sakuraRed : colors.black};
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
			props.active ? colors.sakuraBlue : colors.black};
		transition: ${transitions.easeInOutShort};
	}

	&:hover::after {
		width: 90%;
	}
`;

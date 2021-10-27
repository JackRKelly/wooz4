import {RBWoozLogo} from 'assets/svg/RBWoozLogo';
import {colors} from 'constants/colors';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Navigation = () => (
	<StyledNavigation>
		<Link passHref href="/">
			<a>
				<RBWoozLogo />
			</a>
		</Link>
		<Link passHref href="/">
			<StyledLink>Home</StyledLink>
		</Link>
		<Link passHref href="/about">
			<StyledLink>About</StyledLink>
		</Link>
		<Link passHref href="/blog">
			<StyledLink>Blog</StyledLink>
		</Link>
	</StyledNavigation>
);

const StyledNavigation = styled.nav`
	width: 50%;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;

const StyledLink = styled.a`
	display: inline-block;
	padding: 1rem 1rem;
	text-decoration: none;
	color: ${colors.black};
	font-weight: 500;

	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}

	&:hover {
		text-decoration: underline;
	}
`;

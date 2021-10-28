import React from 'react';
import styled from 'styled-components';

export const Hamburger = () => (
	<Svg
		aria-hidden="true"
		focusable="false"
		role="presentation"
		className="icon icon-hamburger"
		viewBox="0 3 37 40"
	>
		<path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z" />
	</Svg>
);

const Svg = styled.svg`
	display: block;
	width: 2.25rem;
	height: 2.25rem;
`;

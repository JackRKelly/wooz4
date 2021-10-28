import {colors} from 'constants/colors';
import {transitions} from 'constants/transitions';
import React, {FC} from 'react';
import styled from 'styled-components';

interface Props {
	active?: boolean;
}

export const Cart: FC<Props> = ({active}) => (
	<Svg
		aria-hidden="true"
		focusable="false"
		role="presentation"
		className="icon icon-cart"
		viewBox="0 0 37 40"
		active={active}
	>
		<BackdropCart
			fill={colors.sakuraBlue}
			active={active}
			d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"
		/>
		<path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z" />
	</Svg>
);

interface SvgProps {
	active?: boolean;
}

const Svg = styled.svg<SvgProps>`
	fill: black;
	display: block;
	width: 1.9rem;
	height: 1.9rem;
	overflow: shown;
`;

const BackdropCart = styled.path<SvgProps>`
	transition: ${transitions.easeInOutMedium};
	transform: ${props => (props.active ? 'translate(0.1rem, 0.1rem)' : 'none')};
`;

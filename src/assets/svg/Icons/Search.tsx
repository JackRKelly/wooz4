import React, {FC} from 'react';
import styled from 'styled-components';
import {transitions} from '../../../const';
import {SvgFill} from './SvgBase';

export const Search: FC<{active?: boolean}> = ({active}) => (
	<RotatingGlass viewBox="0 0 20 24" active={active}>
		<g
			fill="none"
			stroke="black"
			strokeLinecap="square"
			strokeMiterlimit="10"
			strokeWidth="2"
		>
			<circle cx="8" cy="10" r="6" />
			<path d="M13 15l5 5" />
		</g>
	</RotatingGlass>
);

const RotatingGlass = styled(SvgFill)<{active?: boolean}>`
	transition: ${transitions.easeInOutShort};
	transform: ${props => (props.active ? 'rotate(45deg)' : 'none')};
`;

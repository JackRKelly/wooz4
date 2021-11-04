import styled from 'styled-components';
import {transitions} from '../../../const';

export const SvgFill = styled.svg`
	display: block;
	height: 1.5rem;
	width: 1.5rem;
	fill: #000;
	stroke: none;
	transition: ${transitions.easeInOutShort};
`;

export const SvgStroke = styled.svg`
	display: block;
	height: 1.5rem;
	width: 1.5rem;
	fill: none;
	stroke: black;
`;

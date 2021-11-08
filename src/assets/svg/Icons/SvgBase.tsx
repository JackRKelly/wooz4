import styled from 'styled-components';
import {colors, transitions} from '../../../const';

export const SvgFill = styled.svg<{color?: string}>`
	display: block;
	height: 1.5rem;
	width: 1.5rem;
	fill: ${props => props.color ?? colors.black};
	stroke: none;
	transition: ${transitions.easeInOutShort};
`;

export const SvgStroke = styled.svg<{color?: string}>`
	display: block;
	height: 1.5rem;
	width: 1.5rem;
	fill: none;
	stroke: ${props => props.color ?? colors.black};
`;

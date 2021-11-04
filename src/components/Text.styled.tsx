import styled from 'styled-components';
import {colors} from '../const';

export const GraySpan = styled.span`
	color: ${colors.lightGray};
`;

export const BoldUppercaseText = styled.span<{color?: string}>`
	padding: 0.5rem;
	text-transform: uppercase;
	font-weight: bold;
	color: ${props => (props.color ? props.color : colors.black)};
`;

export const H2NoMargin = styled.h2`
	margin: 0;
`;

export const Availability = styled.span`
	transform: skew(-7deg);
	color: ${colors.red};
	padding: 4px 8px;
	border: 3px solid red;
	border-radius: 3px;
	text-transform: uppercase;
	font-weight: bold;
	user-select: none;
`;

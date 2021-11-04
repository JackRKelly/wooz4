import styled, {css} from 'styled-components';
import {colors, transitions} from '../const';
import {NormalizedButton} from './Normalized.styled';

export const SlantedButton = styled(NormalizedButton)<{
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	borderWidth?: string;
	padding?: string;
	hasArrow?: boolean;
	iconColor?: string;
	fontSize?: string;
	iconHover?: string;
	disabled?: boolean;
	$loading?: boolean;
}>`
	border-radius: 3px;
	transform: skew(-7deg);
	padding: ${props => props.padding ?? '0.2rem 0.7rem'};
	text-transform: uppercase;
	font-weight: bold;
	border: ${props => props.borderWidth ?? '3px'} solid
		${props => props.borderColor ?? colors.darkGray};
	font-size: ${props => props.fontSize ?? 'initial'};
	background-color: ${props => props.backgroundColor ?? colors.white};
	color: ${props => props.color ?? colors.darkGray};
	cursor: ${props =>
		props.disabled || props.$loading ? 'default' : 'pointer'};

	${props =>
		props.iconColor
			? css`
					svg {
						fill: ${props.iconColor};
						stroke: ${props.iconColor};
					}
			  `
			: null}
	${props =>
		props.hasArrow
			? css`
					svg {
						transition: ${transitions.easeInOutShort};
					}
					&:hover {
						svg {
							transform: ${props.iconHover ?? 'none'};
						}
					}
			  `
			: null}
`;

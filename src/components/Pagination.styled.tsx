import {colors, transitions} from 'const';
import styled from 'styled-components';
import {NormalizedButton} from './Normalized.styled';

export const PaginationButton = styled(NormalizedButton)<{
	direction: 'left' | 'right';
}>`
	background-color: ${colors.white};
	margin: ${props =>
		props.direction === 'left' ? '0 .5rem 0 0' : '0 0 0 .5rem'};
	color: ${colors.darkGray};
	&:disabled {
		color: ${colors.lightGray};
		cursor: default;
	}
	svg {
		transition: ${transitions.easeInOutShort};
	}
	&:hover {
		svg {
			transform: translateX(
				${props => (props.direction === 'left' ? '-5px' : '5px')}
			);
		}
	}
`;

export const PaginationText = styled.span`
	padding: 0.5rem;
	text-transform: uppercase;
	font-style: italic;
	font-weight: bold;
`;

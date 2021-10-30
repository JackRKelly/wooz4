import styled from 'styled-components';
import {breakpoints, colors, transitions} from '../const';
import {NormalizedButton} from './Normalized.styled';

export const PaginationText = styled.span`
	font-size: 0.8rem;
	padding: 0.5rem;
	text-transform: uppercase;
	font-style: italic;
	font-weight: bold;
`;

export const MobilePaginationWrapper = styled.div`
	@media (min-width: ${breakpoints.md}px) {
		display: none;
	}
`;

export const PaginationButton = styled(NormalizedButton)<{
	direction: 'left' | 'right';
}>`
	background-color: ${colors.white};
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

import styled from 'styled-components';
import {colors, transitions} from '../const';
import {NormalizedButton} from './Normalized.styled';

export const ArrowButton = styled(NormalizedButton)`
	background-color: ${colors.white};
	margin: 0 0.5rem 0 0;
	color: ${colors.darkGray};
	svg {
		transition: ${transitions.easeInOutShort};
	}
	&:hover {
		svg {
			transform: translateX(-5px);
		}
	}
`;

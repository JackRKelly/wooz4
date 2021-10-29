import {colors, transitions} from 'const';
import styled from 'styled-components';
import {NormalizedLink} from './Normalized.styled';

export const ArrowLinkWrapper = styled(NormalizedLink)`
	font-size: 0.8rem;
	background-color: ${colors.white};
	margin: 0 0.5rem 0 0;
	color: ${colors.darkGray};
	svg {
		transition: ${transitions.easeInOutShort};
	}
	&:hover {
		svg {
			transform: translateX(5px);
		}
	}
`;

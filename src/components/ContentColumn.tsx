import styled from 'styled-components';
import {columnWidth, transitions} from '../const';

export const ContentColumn = styled.div<{padding?: string}>`
	padding: ${props => (props.padding ? props.padding : '1.75rem 0')};
	margin: 0 auto;
	transition: ${transitions.easeInOutShort};

	${columnWidth};
`;

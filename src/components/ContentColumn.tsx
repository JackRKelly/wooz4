import styled from 'styled-components';
import {columnWidth} from '../const';

export const ContentColumn = styled.div<{padding?: string}>`
	padding: ${props => (props.padding ? props.padding : '3.5rem 0')};
	margin: 0 auto;

	${columnWidth}
`;

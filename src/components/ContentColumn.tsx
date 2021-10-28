import {columnWidth} from 'constants/mediaQuery';
import React from 'react';
import styled from 'styled-components';

interface ContentColumnType {
	children?: React.ReactNode;
}

export const ContentColumn: React.FC<ContentColumnType> = ({children}) => (
	<ContentColumnStyled>{children}</ContentColumnStyled>
);

const ContentColumnStyled = styled.div`
	padding: 3.5rem 0;
	margin: 0 auto;
	overflow-x: hidden;

	${columnWidth}
`;

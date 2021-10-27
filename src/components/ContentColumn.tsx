import React from 'react';
import styled from 'styled-components';

interface ContentColumnType {
	children?: React.ReactNode;
}

export const ContentColumn: React.FC<ContentColumnType> = ({children}) => (
	<ContentColumnStyled>{children}</ContentColumnStyled>
);

const ContentColumnStyled = styled.div`
	padding: 2.5em 0;
	width: 50%;
	margin: 0 auto;
`;

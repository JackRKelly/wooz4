import {breakpoints} from 'constants/breakpoints';
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
	width: 90%;
	margin: 0 auto;

	@media (min-width: ${breakpoints.sm}px) {
		width: 80%;
	}

	@media (min-width: ${breakpoints.md}px) {
		width: 70%;
	}

	@media (min-width: ${breakpoints.lg}px) {
		width: 60%;
	}

	@media (min-width: ${breakpoints.xl}px) {
		width: 50%;
	}
`;

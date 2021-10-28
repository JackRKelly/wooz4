import styled from 'styled-components';
import React from 'react';

const LoadingSpinner = styled.div`
	background-color: gray;
	width: 20px;
	height: 20px;
`;

export const Loading = () => <LoadingSpinner />;

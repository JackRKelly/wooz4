import React, {FC} from 'react';
import styled from 'styled-components';
import {pulse} from '../../const';

export const LoadingDots: FC = () => (
	<LoadingDotsWrapper>
		<LoadingDot delay="0ms" />
		<LoadingDot delay="-125ms" />
		<LoadingDot delay="-250ms" />
	</LoadingDotsWrapper>
);

const LoadingDotsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 1.1rem;
	width: 3rem;
`;

const LoadingDot = styled.div<{delay?: string}>`
	width: 0.7rem;
	height: 0.7rem;
	animation: ${pulse} 500ms infinite linear alternate;
	background-color: white;
	animation-delay: ${props => props.delay ?? 'none'};
	border-radius: 50%;
`;

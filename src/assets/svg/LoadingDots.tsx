import React, {FC} from 'react';
import styled from 'styled-components';
import {colors, pulse} from '../../const';

export const LoadingDots: FC<{color?: string; margin?: string}> = ({
	color,
	margin,
}) => (
	<LoadingDotsWrapper margin={margin}>
		<LoadingDot delay="0ms" color={color} />
		<LoadingDot delay="-125ms" color={color} />
		<LoadingDot delay="-250ms" color={color} />
	</LoadingDotsWrapper>
);

const LoadingDotsWrapper = styled.div<{margin?: string}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 1.5rem;
	width: 3rem;
	margin: ${props => props.margin ?? '0'};
`;

const LoadingDot = styled.div<{delay?: string; color?: string}>`
	width: 0.7rem;
	height: 0.7rem;
	animation: ${pulse} 500ms infinite linear alternate;
	background-color: ${props => props.color ?? colors.white};
	animation-delay: ${props => props.delay ?? 'none'};
	border-radius: 50%;
`;

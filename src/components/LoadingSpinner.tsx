import styled from 'styled-components';
import React, {FC} from 'react';
import {redBlueFade, spinnerDash, spinnerRotate} from 'constants/keyframes';

interface Props {
	isLoading: boolean;
}

export const LoadingSpinner: FC<Props> = ({isLoading}) =>
	isLoading ? (
		<Spinner isLoading={isLoading}>
			<Svg
				width="65px"
				height="65px"
				viewBox="0 0 66 66"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Circle
					fill="none"
					strokeWidth="6"
					strokeLinecap="round"
					cx="33"
					cy="33"
					r="30"
				/>
			</Svg>
		</Spinner>
	) : null;

interface LoadingSpinnerProps {
	isLoading: boolean;
}

const Spinner = styled.div<LoadingSpinnerProps>`
	background: rgba(0, 0, 0, 0.6);
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(0, 0, 0, 0.6);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Svg = styled.svg`
	animation: ${spinnerRotate} 1.4s linear infinite;
`;

const Circle = styled.circle`
	stroke-dasharray: 187;
	stroke-dashoffset: 0;
	transform-origin: center;
	animation: ${spinnerDash} 1.4s ease-in-out infinite,
		${redBlueFade} 5.6s ease-in-out infinite;
`;

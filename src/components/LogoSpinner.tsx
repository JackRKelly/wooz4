import React, {useState} from 'react';
import styled from 'styled-components';
import {FixedLogo} from 'assets/svg/fixedLogo';

type LogoSpinnerType = {
	rotate?: number;
};

export const LogoSpinner: React.FC<LogoSpinnerType> = ({rotate = 0}) => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<LogoSpinnerWrapper
			isHovering={isHovering}
			onMouseEnter={() => {
				setIsHovering(true);
			}}
			onMouseLeave={() => {
				setIsHovering(false);
			}}
		>
			<FixedLogo rotate={rotate} isHovering={isHovering} />
		</LogoSpinnerWrapper>
	);
};

interface LogoSpinnerWrapperType {
	isHovering?: boolean;
}

const LogoSpinnerWrapper = styled.div<LogoSpinnerWrapperType>`
	position: fixed;
	top: 20px;
	left: 20px;
	display: inline-block;
`;

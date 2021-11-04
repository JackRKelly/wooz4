import {SlantedButton} from './Button.styled';
import React, {FC, ReactNode} from 'react';
import {FlexRowWrapper} from './Flex.styled';
import {Unslant, ArrowLinkText} from './Link.styled';
import {LoadingDots} from '../assets/svg/LoadingDots';
import {colors} from '../const';

export const ArrowButton: FC<{
	loading?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	Icon?: JSX.Element;
	fontSize?: string;
	padding?: string;
}> = ({
	loading,
	children,
	disabled,
	onClick,
	Icon,
	fontSize = '0.8rem',
	padding,
}) => (
	<SlantedButton
		hasArrow
		padding={padding}
		disabled={disabled}
		fontSize={fontSize}
		type="button"
		onClick={onClick}
	>
		<Unslant>
			<FlexRowWrapper>
				{loading ? (
					<LoadingDots color={colors.darkGray} margin="0 2rem" />
				) : (
					<>
						<ArrowLinkText>{children}</ArrowLinkText>
						{Icon}
					</>
				)}
			</FlexRowWrapper>
		</Unslant>
	</SlantedButton>
);

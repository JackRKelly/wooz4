import {SlantedButton} from './Button.styled';
import React, {FC, ReactNode} from 'react';
import {FlexRowWrapper} from './Flex.styled';
import {Unslant, StyledLinkText} from './Link.styled';
import {LoadingDots} from '../assets/svg/LoadingDots';
import {colors} from '../const';

export const StyledButton: FC<{
	iconHover?: string;
	loading?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	Icon?: JSX.Element;
	fontSize?: string;
	padding?: string;
	borderColor?: string;
	backgroundColor?: string;
	color?: string;
	iconColor?: string;
}> = ({
	iconHover,
	loading,
	children,
	disabled,
	onClick,
	Icon,
	fontSize = '0.8rem',
	iconColor,
	padding,
	borderColor,
	backgroundColor,
	color,
}) => (
	<SlantedButton
		iconHover={iconHover}
		hasArrow={Boolean(Icon)}
		borderColor={borderColor}
		backgroundColor={backgroundColor}
		padding={padding}
		disabled={disabled}
		iconColor={iconColor}
		fontSize={fontSize}
		$loading={loading}
		type="button"
		onClick={onClick}
	>
		<Unslant>
			<FlexRowWrapper>
				{loading ? (
					<LoadingDots color={colors.white} margin="0 2rem" />
				) : (
					<>
						<StyledLinkText color={color}>{children}</StyledLinkText>
						{Icon}
					</>
				)}
			</FlexRowWrapper>
		</Unslant>
	</SlantedButton>
);

import Link from 'next/link';
import React, {FC, ReactNode} from 'react';
import {LoadingDots} from '../assets/svg/LoadingDots';
import {colors} from '../const';
import {FlexRowWrapper} from './Flex.styled';
import {StyledLinkText, SlantedLink, Unslant} from './Link.styled';

export const StyledLink: FC<{
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
	link: string;
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
	link,
}) => (
	<Link passHref href={link}>
		<SlantedLink
			iconHover={iconHover}
			hasArrow={Boolean(Icon)}
			borderColor={borderColor}
			backgroundColor={backgroundColor}
			padding={padding}
			disabled={disabled}
			iconColor={iconColor}
			fontSize={fontSize}
			loading={loading}
			type="button"
			onClick={onClick}
		>
			<Unslant>
				<FlexRowWrapper>
					{loading ? (
						<LoadingDots color={colors.darkGray} margin="0 2rem" />
					) : (
						<>
							<StyledLinkText color={color}>{children}</StyledLinkText>
							{Icon}
						</>
					)}
				</FlexRowWrapper>
			</Unslant>
		</SlantedLink>
	</Link>
);

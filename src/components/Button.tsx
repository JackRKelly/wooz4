import {SlantedButton} from './Button.styled';
import React, {FC, ReactNode} from 'react';
import {ArrowRight} from '../assets/svg';
import {FlexRowWrapper} from './Flex.styled';
import {Unslant, ArrowLinkText} from './Link.styled';
import {LoadingDots} from '../assets/svg/LoadingDots';
import {colors} from '../const';

export const ArrowButton: FC<{
	loading: boolean;
	children: ReactNode;
	disabled: boolean;
	onClick: () => void;
}> = ({loading, children, disabled, onClick}) => (
	<SlantedButton
		hasArrow
		disabled={disabled}
		fontSize="0.8rem"
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
						<ArrowRight />
					</>
				)}
			</FlexRowWrapper>
		</Unslant>
	</SlantedButton>
);

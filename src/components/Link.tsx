import Link from 'next/link';
import React, {FC} from 'react';
import {ArrowRight} from '../assets/svg';
import {FlexRowWrapper} from './Flex.styled';
import {ArrowLinkWrapper} from './Link.styled';
import {BoldUppercaseText} from './Text.styled';

export const ArrowLink: FC<{link: string; text: string}> = ({link, text}) => (
	<Link passHref href={link}>
		<ArrowLinkWrapper>
			<FlexRowWrapper>
				<BoldUppercaseText>{text}</BoldUppercaseText>
				<ArrowRight />
			</FlexRowWrapper>
		</ArrowLinkWrapper>
	</Link>
);

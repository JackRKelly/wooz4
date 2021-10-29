import {ArrowRight} from 'assets/svg';
import React, {FC} from 'react';
import {ArrowLinkWrapper} from 'components/Link.styled';
import Link from 'next/link';
import {BoldUppercaseText} from 'components/Text.styled';
import {FlexRowWrapper} from 'components/Flex.styled';

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

import Link from 'next/link';
import React, {FC} from 'react';
import {ArrowRight} from '../assets/svg';
import {FlexRowWrapper} from './Flex.styled';
import {ArrowLinkText, SlantedLink, Unslant} from './Link.styled';

export const ArrowLink: FC<{link: string; text: string}> = ({link, text}) => (
	<Link passHref href={link}>
		<SlantedLink hasArrow fontSize="0.8rem">
			<Unslant>
				<FlexRowWrapper>
					<ArrowLinkText>{text}</ArrowLinkText>
					<ArrowRight />
				</FlexRowWrapper>
			</Unslant>
		</SlantedLink>
	</Link>
);

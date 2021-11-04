import Link from 'next/link';
import React, {FC} from 'react';
import {FlexRowWrapper} from './Flex.styled';
import {ArrowLinkText, SlantedLink, Unslant} from './Link.styled';

export const ArrowLink: FC<{link: string; text: string; Icon?: JSX.Element}> =
	({link, text, Icon}) => (
		<Link passHref href={link}>
			<SlantedLink hasArrow fontSize="0.8rem">
				<Unslant>
					<FlexRowWrapper>
						<ArrowLinkText>{text}</ArrowLinkText>
						{Icon}
					</FlexRowWrapper>
				</Unslant>
			</SlantedLink>
		</Link>
	);

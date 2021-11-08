import React, {FC} from 'react';
import {SvgFill} from './SvgBase';

export const ArrowLeft: FC<{color?: string}> = ({color}) => (
	<SvgFill viewBox="0 0 24 24" color={color}>
		<path
			transform="translate(24,0) scale(-1, 1)"
			d="M17.59 7l5 5-5 5M0 12h22"
			fill="none"
			stroke="currentColor"
			strokeMiterlimit="10"
			strokeWidth="2"
		/>
	</SvgFill>
);

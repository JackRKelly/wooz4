import React, {FC} from 'react';
import {SvgStroke} from './SvgBase';

export const ArrowRight: FC<{color?: string}> = ({color}) => (
	<SvgStroke viewBox="0 0 24 24" color={color}>
		<path
			d="M17.59 7l5 5-5 5M0 12h22"
			fill="none"
			strokeMiterlimit="10"
			strokeWidth="2"
		/>
	</SvgStroke>
);

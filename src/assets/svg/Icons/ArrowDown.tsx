import React, {FC} from 'react';
import {SvgStroke} from './SvgBase';

export const ArrowDown: FC<{color?: string}> = ({color}) => (
	<SvgStroke id="dropdown" viewBox="0 0 16 24" color={color}>
		<path
			fill="none"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M1.5 9L8 15.5 14.5 9"
		/>
	</SvgStroke>
);

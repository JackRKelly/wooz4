import React, {FC} from 'react';
import {SvgStroke} from './SvgBase';

export const Cart: FC = () => (
	<SvgStroke viewBox="0 0 16 24">
		<g strokeMiterlimit="10" strokeWidth="2">
			<path d="M1 7h14v14H1z" />
			<path d="M11 10V3H5v7" />
		</g>
	</SvgStroke>
);

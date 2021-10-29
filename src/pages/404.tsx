import Link from 'next/link';
import React from 'react';
import {ContentColumn} from '../components/ContentColumn';

const FourOFour = () => (
	<ContentColumn>
		<h2>404 - Page Not Found</h2>
		<p>This page is under construction</p>
		<Link href="/">
			<a>Return Home</a>
		</Link>
	</ContentColumn>
);

export default FourOFour;

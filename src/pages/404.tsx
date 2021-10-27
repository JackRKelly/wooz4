import {ContentColumn} from 'components/ContentColumn';
import Link from 'next/link';
import React from 'react';

const FourOFour = () => (
	<ContentColumn>
		<h1>404 - Page Not Found</h1>
		<Link href="/">
			<a>Return Home</a>
		</Link>
	</ContentColumn>
);

export default FourOFour;

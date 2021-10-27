import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {colors} from 'constants/colors';

const Page = () => (
	<Html lang="en">
		<Head>
			<meta charSet="utf-8" />
			<link
				rel="icon"
				type="image/png"
				href="https://avatars.githubusercontent.com/u/42853339?v=4"
			/>
			<meta name="theme-color" content={colors.lightRed} />
			<meta
				name="description"
				content="Jack Kelly, Full–stack TypeScript engineer from the US"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Sora:wght@300;500;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default class DocumentPage extends Document {
	render() {
		return <Page />;
	}
}

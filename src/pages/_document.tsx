import React from 'react';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

import {ServerStyleSheet} from 'styled-components';
import {colors} from '../const';

export default class DocumentPage extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<>
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content={colors.lightRed} />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
					<link
						href="https://fonts.googleapis.com/css2?family=Sora:wght@300;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<Html lang="en">
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		);
	}
}

import React from 'react';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import {colors} from 'constants/colors';
import {ServerStyleSheet} from 'styled-components';

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

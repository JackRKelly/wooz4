import React, {StrictMode, useEffect} from 'react';
import type {AppProps} from 'next/app';
import * as styled from 'styled-components';
import {Navigation} from 'components/Navigation';
import {Apollo as ApolloProvider} from 'context/Apollo';
import {colors} from 'const';
import ScrollManager from 'components/ScrollManager';

export const GlobalStyle = styled.createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-family: 'Sora', sans-serif;
		font-weight: 300;
		background-color: ${colors.lighterGray};
	}

	body {
		margin: 0;
		background-attachment: fixed;
		background-size: cover;
	}

	table {
		border-collapse: collapse;
	}

	.table-responsive.dynamic {
		overflow-x: scroll;
	}

	table,
	td,
	th {
		border-bottom: 1px solid black;
		padding: 4px 6px;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	::selection {
		color: ${colors.white};
		background: ${colors.sakuraRed};
	}

	img::selection {
		color: ${colors.black};
		background: ${colors.lightGray};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		&::selection {
			color: ${colors.white};
			background: ${colors.sakuraBlue};
		}
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: #fff;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const App = ({Component, pageProps, router}: AppProps) => {
	useEffect(() => {
		void new Audio('/pop.mp3').play().catch(() => null);
	}, [router.pathname]);

	return (
		<StrictMode>
			<ApolloProvider>
				<Navigation />
				<GlobalStyle />
				<Component {...pageProps} />
				<ScrollManager />
			</ApolloProvider>
		</StrictMode>
	);
};

export default App;

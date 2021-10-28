import React, {StrictMode, useEffect} from 'react';
import type {AppProps} from 'next/app';
import {createGlobalStyle} from 'styled-components';
import {Navigation} from 'components/Navigation';
import {Apollo as ApolloProvider} from 'context/Apollo';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
		font-family: 'Sora', sans-serif;
		font-weight: 300;
  }

  body {
    margin: 0;
		background-attachment: fixed; 
		background-size: cover;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
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
			</ApolloProvider>
		</StrictMode>
	);
};

export default App;

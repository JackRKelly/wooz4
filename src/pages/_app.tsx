import React, {StrictMode, useEffect} from 'react';
import type {AppProps} from 'next/app';
import {createGlobalStyle} from 'styled-components';
import {FixedBackground} from 'components/FixedBackground';
import {Navigation} from 'components/Navigation';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
		font-family: 'Sora', sans-serif;
		font-weight: 300;
  }

  body {
    margin: 0;
  }  

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

function App({Component, pageProps, router}: AppProps) {
	useEffect(() => {
		void new Audio('/pop.mp3').play().catch(() => null);
	}, [router.pathname]);

	return (
		<StrictMode>
			<Navigation />
			<GlobalStyle />
			<Component {...pageProps} />
			<FixedBackground />
		</StrictMode>
	);
}

export default App;

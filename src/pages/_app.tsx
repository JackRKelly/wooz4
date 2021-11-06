import React, {StrictMode, useEffect} from 'react';
import type {AppProps} from 'next/app';
import {Navigation} from '../components/Navigation';
import ScrollManager from '../components/ScrollManager';
import {colors} from '../const';
import * as styled from 'styled-components';
import {QueryClient, QueryClientProvider} from 'react-query';
import {isProd} from '../util/env';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import 'swiper/css/lazy';

import {NavigationPlaceholder} from '../components/Navigation/Navigation.styled';

export const GlobalStyle = styled.createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-family: 'Sora', sans-serif;
		font-weight: 300;
		background-color: ${colors.white};
	}

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		background-attachment: fixed;
		background-size: cover;
	}

	body.scroll-hidden {
		overflow: hidden;
	}

	table {
		border-collapse: collapse;
	}

	.table-responsive.dynamic {
		overflow-x: auto;
	}

	.scroll-hidden {
		.table-responsive.dynamic {
			overflow-x: hidden;
		}
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
		background: ${colors.red};
	}

	img::selection {
		color: ${colors.black};
		background: ${colors.lightGray};
	}

	input,
	select,
	textarea,
	button {
		font-family: inherit;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		&::selection {
			color: ${colors.white};
			background: ${colors.blue};
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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: isProd(),
			refetchIntervalInBackground: isProd(),
			refetchOnWindowFocus: isProd(),
		},
	},
});

const App = ({Component, pageProps, router}: AppProps) => {
	useEffect(() => {
		void new Audio('/pop.mp3').play().catch(() => null);
	}, [router.pathname]);

	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<NavigationPlaceholder />
				<Navigation />
				<GlobalStyle />
				<Component {...pageProps} />
				<ScrollManager />
			</QueryClientProvider>
		</StrictMode>
	);
};

export default App;

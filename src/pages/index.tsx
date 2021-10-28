import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from 'components/ContentColumn';
import styled from 'styled-components';
import {buildTitle} from 'util/title';

const StyledP = styled.p`
	font-size: 1.05rem;
`;

const Home: NextPage = () => (
	<div>
		<Head>
			<title>{buildTitle('About', 'after')}</title>
		</Head>

		<ContentColumn>
			<h1>Wooz4</h1>
			<StyledP>Modern japanese inspired clothing brand</StyledP>
		</ContentColumn>
	</div>
);

export default Home;

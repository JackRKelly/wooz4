import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {buildTitle} from '../util/title';

const Contact: NextPage = () => (
	<ContentColumn>
		<Head>
			<title>{buildTitle('Contact', 'after')}</title>
		</Head>
		<h2>Contact</h2>
		<p>This page is under construction</p>
		<form>
			<label htmlFor="name">Name</label>
			<input name="name" />
			<button
				type="submit"
				onClick={e => {
					e.preventDefault();
					void new Audio('/success.mp3').play().catch(() => null);
				}}
			>
				Submit
			</button>
		</form>
	</ContentColumn>
);

export default Contact;

import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import {ContentColumn} from '../components/ContentColumn';
import {FeaturedCollection} from '../components/FeaturedCollection';
import {buildTitle} from '../util/title';
import {
	getCollectionProducts,
	getSingleCollection,
	SingleCollection,
} from '../services/collection';
import {ProductList} from '../services/product';
import styled from 'styled-components';
import {breakpoints, colors, transitions} from '../const';
import {Dash} from '../assets/svg/Dash';
import Link from 'next/link';
import {Dots} from '../assets/svg/Dots';
import {HeroText} from '../assets/svg/HeroText';

const FEATURED_COLLECTION_HANDLE = 'sakura-collection';

interface Props {
	collection: SingleCollection;
	collectionProductList: ProductList;
}

const HeroSection = styled.section`
	background-image: linear-gradient(
			45deg,
			rgba(210, 210, 210, 0.827),
			rgba(210, 210, 210, 0.6)
		),
		url('/images/no-image-collection-banner.jpg');
`;

const HeroHeading = styled.h2`
	font-size: 3rem;
	color: ${colors.darkGray};
	margin: 0;
	@media (max-width: ${breakpoints.md}px) {
		font-size: 2rem;
	}
`;

const HeroWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

const HeroHeadingStyled = styled.span`
	color: ${colors.red};
	text-shadow: 0.25rem 0.25rem ${colors.darkGray};
	transition: ${transitions.easeInOutShort};
	&:hover {
		text-shadow: 0 0 ${colors.darkGray};
	}
	@media (max-width: ${breakpoints.md}px) {
		text-shadow: 0.15rem 0.15rem ${colors.darkGray};
	}
`;

const HeroCTA = styled.a`
	background-color: ${colors.red};
	color: ${colors.white};
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
`;

const Home: NextPage<Props> = ({collection, collectionProductList}: Props) => (
	<>
		<Head>
			<title>{buildTitle('Home', 'after')}</title>
		</Head>

		<HeroSection>
			<ContentColumn padding="3rem 0">
				<HeroWrapper>
					<HeroText margin="0" />
					<Dots margin="1rem 0 0.5rem" />
					<HeroHeading>
						Creating modern
						<br />
						<HeroHeadingStyled>Japanese-inspired</HeroHeadingStyled>
						<br />
						clothing for you
					</HeroHeading>
					<Dots margin="0.6rem 0 1.25rem" />
					<Link passHref href="/products">
						<HeroCTA>Shop Now</HeroCTA>
					</Link>
				</HeroWrapper>
			</ContentColumn>
		</HeroSection>
		<ContentColumn>
			<FeaturedCollection
				collection={collection}
				productList={collectionProductList}
				handle={FEATURED_COLLECTION_HANDLE}
			/>
		</ContentColumn>
	</>
);

Home.getInitialProps = async (): Promise<Props> => {
	const collection = await getSingleCollection(FEATURED_COLLECTION_HANDLE);
	const collectionProductList = await getCollectionProducts({
		limit: 8,
		handle: FEATURED_COLLECTION_HANDLE,
	});

	return {collection, collectionProductList};
};

export default Home;

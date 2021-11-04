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
import Link from 'next/link';
import {Dots} from '../assets/svg/Dots';
import {HeroText} from '../assets/svg/HeroText';
import {ArrowRight} from '../assets/svg';
import {FlexRowWrapper} from '../components/Flex.styled';

const FEATURED_COLLECTION_HANDLE = 'sakura-collection';

interface Props {
	collection: SingleCollection;
	collectionProductList: ProductList;
}

const HeroSection = styled.section`
	background-image: linear-gradient(
			45deg,
			rgba(230, 230, 230, 0.827),
			rgba(210, 210, 210, 0.6)
		),
		url('/images/no-image-collection-banner.jpg');
	background-size: cover;
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
	transition: ${transitions.easeInOutShort};
`;

const HeroCTA = styled.a`
	background-color: ${colors.red};
	color: ${colors.white};
	text-decoration: none;
	border-radius: 4px;
	transform: skew(-7deg);
	padding: 0.2rem 0.7rem;
	border: 3px solid red;
	border-radius: 3px;
	text-transform: uppercase;
	font-weight: bold;
	user-select: none;
	&:hover {
		svg {
			transform: translateX(0.3rem);
		}
	}
`;

const HeroCTAWrapper = styled(FlexRowWrapper)`
	transform: skew(7deg);
`;

const HeroCTACopy = styled.span`
	padding-right: 0.5rem;
`;

const Home: NextPage<Props> = ({collection, collectionProductList}: Props) => (
	<>
		<Head>
			<title>{buildTitle('Home', 'after')}</title>
		</Head>

		<HeroSection>
			<ContentColumn padding="3rem 0">
				<HeroWrapper>
					<HeroText />
					<Dots margin="1rem 0 0.5rem" />
					<HeroHeading>
						Creating modern
						<br />
						<HeroHeadingStyled>Japanese-inspired</HeroHeadingStyled>
						<br />
						clothing for you
					</HeroHeading>
					<Dots margin="0.6rem 0 1.15rem" />
					<Link passHref href="/products">
						<HeroCTA>
							<HeroCTAWrapper>
								<HeroCTACopy>Shop Now</HeroCTACopy>
								<ArrowRight />
							</HeroCTAWrapper>
						</HeroCTA>
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

import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import {GET_COLLECTION_BY_ID} from 'graph';
import {useQuery} from '@apollo/client';
import Image from 'next/image';
import Head from 'next/head';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {buildTitle} from 'util/title';
import {
	GetCollectionById,
	GetCollectionByIdVariables,
} from 'graph/@types/GetCollectionById';
import {
	ProductCardGrid,
	ProductCard,
	ProductCardLink,
	ProductFlex,
	ProductCardImageWrapper,
	ProductCardWrapper,
} from 'components/ProductCard';
import Link from 'next/link';

const Collection = () => {
	const router = useRouter();
	const {id} = router.query;

	const {loading, data} = useQuery<
		GetCollectionById,
		GetCollectionByIdVariables
	>(GET_COLLECTION_BY_ID, {
		variables: {id: id?.toString() ?? ''},
	});

	const {collection} = data ?? {};
	const {title, description, products} = collection ?? {};

	return (
		<ContentColumn>
			<Head>
				<title>
					{title
						? buildTitle(`${title}`, 'after')
						: buildTitle('Loading...', 'before')}
				</title>
			</Head>

			<LoadingSpinner isLoading={loading} />

			<h2>{title}</h2>
			<p>{description}</p>
			<ProductCardGrid>
				{products?.edges.map(
					({
						node: {
							id,
							title,
							images,
							priceRange: {
								minVariantPrice: {amount},
							},
						},
					}) => (
						<ProductCardWrapper key={id}>
							<Link passHref href={`/product/${id}`}>
								<ProductCardLink>
									<ProductCard>
										<ProductFlex>
											<ProductCardImageWrapper>
												<Image
													alt="product"
													src={images?.edges[0].node.transformedSrc as string}
													layout="fill"
												/>
											</ProductCardImageWrapper>
											<span>
												{title} - ${amount}
											</span>
										</ProductFlex>
									</ProductCard>
								</ProductCardLink>
							</Link>
						</ProductCardWrapper>
					),
				)}
			</ProductCardGrid>
		</ContentColumn>
	);
};

export default Collection;

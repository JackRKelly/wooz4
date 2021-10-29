import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import {GET_COLLECTION_BY_HANDLE} from 'graph';
import {useQuery} from '@apollo/client';
import Head from 'next/head';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {buildTitle} from 'util/title';
import {
	GetCollectionByHandle,
	GetCollectionByHandleVariables,
} from 'graph/@types/GetCollectionByHandle';
import {ProductCard, ProductCardGrid} from 'components/ProductCard';

const Collection = () => {
	const router = useRouter();
	const {handle} = router.query;

	const {loading, data} = useQuery<
		GetCollectionByHandle,
		GetCollectionByHandleVariables
	>(GET_COLLECTION_BY_HANDLE, {
		variables: {handle: handle?.toString() ?? ''},
	});

	const {collectionByHandle} = data ?? {};
	const {title, description, products} = collectionByHandle ?? {};

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
							handle,
							images: {edges},
							priceRange: {
								minVariantPrice: {amount, currencyCode},
							},
						},
					}) => (
						<ProductCard
							key={id}
							currencyCode={currencyCode}
							link={`/product/${handle as string}`}
							price={amount as string}
							thumbnail={edges[0].node.transformedSrc as string}
							title={title}
						/>
					),
				)}
			</ProductCardGrid>
		</ContentColumn>
	);
};

export default Collection;

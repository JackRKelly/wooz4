import {ContentColumn} from 'components/ContentColumn';
import {useRouter} from 'next/router';
import React from 'react';
import {GET_PRODUCT_BY_HANDLE} from 'graph';
import {useQuery} from '@apollo/client';
import {
	GetProductByHandle,
	GetProductByHandleVariables,
} from 'graph/@types/GetProductByHandle';
import Image from 'next/image';
import Head from 'next/head';
import {Select, Option} from 'components/Select';
import {LoadingSpinner} from 'components/LoadingSpinner';
import {buildTitle} from 'util/title';
import reactHtmlParser from 'react-html-parser';
import {formatPrice} from 'util/formatPrice';

const Product = () => {
	const router = useRouter();
	const {handle} = router.query;

	const {loading, data} = useQuery<
		GetProductByHandle,
		GetProductByHandleVariables
	>(GET_PRODUCT_BY_HANDLE, {
		variables: {handle: handle?.toString() ?? ''},
	});

	const {productByHandle} = data ?? {};
	const {
		title,
		priceRange,
		options: productOptions,
		images,
	} = productByHandle ?? {};
	const {minVariantPrice} = priceRange ?? {};

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

			<h2>
				{title} -{' '}
				{formatPrice(
					minVariantPrice?.amount,
					minVariantPrice?.currencyCode as string,
				)}
			</h2>
			<div>{reactHtmlParser(productByHandle?.descriptionHtml as string)}</div>

			{productOptions?.map(option => {
				const options: Option[] = option.values.map(value => ({
					id: `${option.id}${value}`,
					value,
				}));
				return (
					<div key={option.id}>
						<p>{option.name}</p>
						<Select options={options} />
					</div>
				);
			})}

			{images?.edges?.map(({node: {id, transformedSrc}}) => (
				<Image
					key={id}
					alt={title}
					src={transformedSrc as string}
					width={300}
					height={300}
				/>
			))}
		</ContentColumn>
	);
};

export default Product;

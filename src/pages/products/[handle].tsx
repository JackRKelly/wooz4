import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import reactHtmlParser from 'react-html-parser';
import {ContentColumn} from '../../components/ContentColumn';
import {LoadingSpinner} from '../../components/LoadingSpinner';
import {Select, Option} from '../../components/Select';
import {GET_PRODUCT_BY_HANDLE} from '../../graph';
import {
	GetProductByHandle,
	GetProductByHandleVariables,
} from '../../graph/@types/GetProductByHandle';
import {formatPrice} from '../../util/formatPrice';
import {buildTitle} from '../../util/title';
import Image from 'next/image';

const Product = () => {
	// const router = useRouter();
	// const {handle} = router.query;
	// const {loading, data} = useQuery<
	// 	GetProductByHandle,
	// 	GetProductByHandleVariables
	// >(GET_PRODUCT_BY_HANDLE, {
	// 	variables: {handle: handle?.toString() ?? ''},
	// });
	// const {productByHandle} = data ?? {};
	// const {
	// 	title,
	// 	priceRange,
	// 	options: productOptions,
	// 	images,
	// } = productByHandle ?? {};
	// const {minVariantPrice} = priceRange ?? {};
	// return (
	// 	<ContentColumn>
	// 		<Head>
	// 			<title>
	// 				{title
	// 					? buildTitle(`${title}`, 'after')
	// 					: buildTitle('Loading...', 'before')}
	// 			</title>
	// 		</Head>
	// 		<LoadingSpinner isLoading={loading} />
	// 		<h2>
	// 			{title} -{' '}
	// 			{formatPrice(
	// 				minVariantPrice?.amount,
	// 				minVariantPrice?.currencyCode as string,
	// 			)}
	// 		</h2>
	// 		<div>{reactHtmlParser(productByHandle?.descriptionHtml as string)}</div>
	// 		{productOptions?.map(option => {
	// 			const options: Option[] = option.values.map(value => ({
	// 				id: `${option.id}${value}`,
	// 				value,
	// 			}));
	// 			return (
	// 				<div key={option.id}>
	// 					<p>{option.name}</p>
	// 					<Select options={options} />
	// 				</div>
	// 			);
	// 		})}
	// 		{images?.edges?.map(({node: {id, transformedSrc}}) => (
	// 			<Image
	// 				key={id}
	// 				alt={title}
	// 				src={transformedSrc as string}
	// 				width={300}
	// 				height={300}
	// 			/>
	// 		))}
	// 	</ContentColumn>
	// );
	return null;
};

export default Product;

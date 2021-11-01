import React from 'react';
import {useImmer} from 'use-immer';
import {useQueryClient, useMutation} from 'react-query';
import {CART_ITEM_COUNT_QUERY} from '../../const/query';
import {formatPrice} from '../../util/intl';
import {NextPageContext} from 'next';
import {ContentColumn} from '../../components/ContentColumn';
import {getSingleProduct, SingleProduct} from '../../services/product';
import {addCartItem} from '../../services/cart';
import styled from 'styled-components';
import reactHtmlParser from 'react-html-parser';
import Head from 'next/head';
import {buildTitle} from '../../util/title';
import {DropDown} from '../../components/DropDown';
import {colors} from '../../const';
import {NormalizedButton} from '../../components/Normalized.styled';
import {FlexRowWrapper} from '../../components/Flex.styled';
import dynamic from 'next/dynamic';
import {Swiper} from 'swiper';
import {ProductProps} from '../../components/ProductSwiper';

const SwiperSliderNoSSR = dynamic<ProductProps>(
	async () =>
		import('../../components/ProductSwiper').then(mod => mod.ProductSwiper),
	{ssr: false},
);

interface Props {
	product: SingleProduct;
}

interface State {
	variant: SingleProduct['variants'][0];
	quantity: number;
}

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
	column-gap: 2rem;
	align-items: start;
	.swiper {
		width: 100%;
	}
`;

const GridVariantWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	column-gap: 0.75rem;
`;

const AddToCart = styled(NormalizedButton)`
	background-color: ${colors.lightGray};
	padding: 0.7rem 0.5rem;
	cursor: pointer;
	font-size: 0.9rem;
	font-weight: 300;
`;

const Product = ({product}: Props) => {
	const [swiper, setSwiper] = React.useState<Swiper>();
	const [state, setState] = useImmer<State>({
		variant: product.variants[0],
		quantity: 1,
	});

	const queryClient = useQueryClient();
	const addItem = useMutation(addCartItem, {
		onSuccess: async () => queryClient.invalidateQueries(CART_ITEM_COUNT_QUERY),
	});

	return (
		<ContentColumn>
			<Head>
				<title>{buildTitle(product.title, 'after')}</title>
			</Head>
			<GridWrapper>
				<SwiperSliderNoSSR product={product} setSwiper={setSwiper} />
				<div>
					<h1>{product.title}</h1>
					<p>{formatPrice(state.variant.price)}</p>

					<label>Variants</label>
					<GridVariantWrapper>
						<DropDown
							// disabled={addItem.isLoading}
							value={{title: state.variant.title, id: state.variant.id}}
							options={product.variants.map(variant => ({
								id: variant.id,
								title: variant.title,
							}))}
							onSelect={optionId => {
								const variant = product.variants.find(
									({id}) => id === optionId,
								);
								const slideIndex = product.images.findIndex(
									image => image.id === variant?.image,
								);
								if (slideIndex !== -1 && swiper) {
									swiper.slideTo(slideIndex);
								}
								setState(draft => {
									draft.variant = variant!;
								});
							}}
						/>
						<input
							type="number"
							value={state.quantity}
							min="1"
							max="100"
							onChange={event => {
								setState(draft => {
									draft.quantity = Number(event.target.value);
								});
							}}
						/>
					</GridVariantWrapper>
					<FlexRowWrapper padding="1rem 0" justifyContent="flex-end">
						<AddToCart
							type="button"
							onClick={async () => {
								await addItem.mutateAsync({
									variantId: state.variant.id,
									quantity: state.quantity,
								});
								setState(draft => {
									draft.quantity = 1;
								});
								void new Audio('/success.mp3').play().catch(() => null);
							}}
						>
							Add to cart
						</AddToCart>
					</FlexRowWrapper>

					<div>{reactHtmlParser(product.descriptionHtml)}</div>
				</div>
			</GridWrapper>
		</ContentColumn>
	);
};

Product.getInitialProps = async ({query}: NextPageContext): Promise<Props> => {
	const handle = query.handle as string;
	const product = await getSingleProduct(handle);

	return {product};
};

export default Product;

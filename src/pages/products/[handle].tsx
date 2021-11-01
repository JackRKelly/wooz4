import React from 'react';
import Image from 'next/image';
import {useImmer} from 'use-immer';
import {useQueryClient, useMutation} from 'react-query';
import {A11y, Keyboard, Navigation, Pagination, Swiper} from 'swiper';
import {Swiper as SwiperSlider, SwiperSlide} from 'swiper/react';
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
	.swiper {
		width: 100%;
	}
`;
const GridVariantWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	column-gap: 0.75rem;
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
				<SwiperSlider
					navigation
					modules={[A11y, Keyboard, Navigation, Pagination]}
					pagination={{clickable: true}}
					onSwiper={setSwiper}
				>
					{product.images.map(({id, src, alt}) => (
						<SwiperSlide key={id}>
							<Image
								src={src}
								alt={alt}
								width="500"
								height="500"
								layout="responsive"
							/>
						</SwiperSlide>
					))}
				</SwiperSlider>
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
					<button
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
					</button>

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

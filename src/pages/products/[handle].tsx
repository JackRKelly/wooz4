import React from 'react';
import Image from 'next/image';
import {useImmer} from 'use-immer';
import truncate from 'lodash/truncate';
import {useQueryClient, useMutation} from 'react-query';
import {
	A11y,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
	Swiper,
} from 'swiper';
import {Swiper as SwiperSlider, SwiperSlide} from 'swiper/react';
import {CART_ITEM_COUNT_QUERY} from '../../const/query';
import {formatPrice} from '../../util/intl';
import {NextPageContext} from 'next';
import {ContentColumn} from '../../components/ContentColumn';
import {getSingleProduct, SingleProduct} from '../../services/product';
import {addCartItem} from '../../services/cart';

interface Props {
	product: SingleProduct;
}

interface State {
	variant: SingleProduct['variants'][0];
	quantity: number;
}

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
			<h2>{product.title}</h2>
			<p>{truncate(product.description, {length: 120})}</p>
			<p>{formatPrice(state.variant.price)}</p>

			<SwiperSlider
				preloadImages
				pagination={{clickable: true}}
				spaceBetween={50}
				modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
				slidesPerView={1}
				onSwiper={setSwiper}
				onSlideChange={() => {
					console.log('slide change');
				}}
			>
				{product.images.map(({id, src, alt}) => (
					<SwiperSlide key={id}>
						<Image src={src} alt={alt} width="500" height="500" />
					</SwiperSlide>
				))}
			</SwiperSlider>

			<form>
				<label id="product-variants-label">Variants</label>
				<select
					// label="Variants"
					// labelId="product-variants-label"
					disabled={addItem.isLoading}
					value={state.variant.id}
					onChange={event => {
						const variant = product.variants.find(
							({id}) => id === event.target.value,
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
				>
					{product.variants.map(variant => (
						<option key={variant.id} value={variant.id}>
							{variant.title} - {formatPrice(variant.price)}
						</option>
					))}
				</select>
			</form>

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
		</ContentColumn>
	);
};

Product.getInitialProps = async ({query}: NextPageContext): Promise<Props> => {
	const handle = query.handle as string;
	const product = await getSingleProduct(handle);

	return {product};
};

export default Product;

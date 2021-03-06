import React, {useState} from 'react';
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
import {FlexRowWrapper} from '../../components/Flex.styled';
import dynamic from 'next/dynamic';
import {Swiper} from 'swiper';
import {ProductProps} from '../../components/ProductSwiper';
import {StyledButton} from '../../components/Button';
import {ArrowRight, Close} from '../../assets/svg';
import {Unslant} from '../../components/Link.styled';

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
	align-items: center;
	.swiper {
		width: 100%;
	}
`;

const GridVariantWrapper = styled.div`
	display: grid;
	grid-template-columns: 10fr auto;
	column-gap: 0.75rem;
`;

const QuantitySelector = styled.input`
	max-width: 5rem;
	padding: 0.3rem 0.4rem 0.3rem 0.9rem;
	border-radius: 3px;
	text-transform: uppercase;
	font-weight: bold;
	border: 3px solid ${colors.darkGray};
	font-size: 1rem;
	background-color: ${colors.white};
	color: ${colors.darkGray};
	-webkit-appearance: none;
`;

const SwiperWrapper = styled.div`
	background-color: ${colors.lighterGray};
`;

const ProductTag = styled.span`
	background-color: lightgray;
	color: ${colors.darkGray};
	padding: 0.25rem 0.5rem;
	border-radius: 3px;
	margin-right: 0.45rem;
	transform: skewX(-7deg);
	display: inline-block;
`;

const ProductTitle = styled.h1`
	margin: 0 0 1rem;
	font-style: italic;
	font-weight: normal;
`;

const ProductPrice = styled.span`
	font-weight: bold;
	margin-bottom: 1rem;
	display: block;
`;

const ProductTagWrapper = styled.div`
	margin: 1rem 0;
`;

const ProductVariantLabel = styled.label`
	margin-bottom: 0.3rem;
	display: inline-block;
`;

const Product = ({product}: Props) => {
	const [swiper, setSwiper] = useState<Swiper>();
	const [state, setState] = useImmer<State>({
		variant: product.variants[0],
		quantity: 1,
	});
	const [isAddToCartLoading, setIsAddToCartLoading] = useState(false);

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
				<SwiperWrapper>
					<SwiperSliderNoSSR product={product} setSwiper={setSwiper} />
				</SwiperWrapper>
				<div>
					<ProductTitle>{product.title}</ProductTitle>
					<ProductPrice>{formatPrice(state.variant.price)}</ProductPrice>
					<ProductTagWrapper>
						{product.tags.map(tag => (
							<ProductTag key={`${product.title}_tag-${tag}`}>
								<Unslant>{tag}</Unslant>
							</ProductTag>
						))}
					</ProductTagWrapper>
					<ProductVariantLabel>Variants: </ProductVariantLabel>
					<GridVariantWrapper>
						<DropDown
							value={state.variant}
							options={product.variants}
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
						<QuantitySelector
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
						<StyledButton
							iconHover={
								state.variant.outOfStock ? undefined : 'translate(5px)'
							}
							iconColor={state.variant.outOfStock ? colors.red : colors.white}
							color={state.variant.outOfStock ? colors.red : colors.white}
							borderColor={
								state.variant.outOfStock ? colors.red : colors.darkGray
							}
							backgroundColor={
								state.variant.outOfStock ? undefined : colors.darkGray
							}
							padding="0.3rem 0.9rem"
							Icon={state.variant.outOfStock ? <Close /> : <ArrowRight />}
							disabled={isAddToCartLoading || state.variant.outOfStock}
							loading={isAddToCartLoading}
							onClick={async () => {
								setIsAddToCartLoading(true);
								await addItem
									.mutateAsync({
										variantId: state.variant.id,
										quantity: state.quantity,
									})
									.finally(() => {
										setIsAddToCartLoading(false);
										setState(draft => {
											draft.quantity = 1;
										});
										void new Audio('/success.mp3').play().catch(() => null);
									});
							}}
						>
							{state.variant.outOfStock ? 'Unavailable' : 'Add to cart'}
						</StyledButton>
					</FlexRowWrapper>
				</div>
			</GridWrapper>
			<div>{reactHtmlParser(product.descriptionHtml)}</div>
		</ContentColumn>
	);
};

Product.getInitialProps = async ({query}: NextPageContext): Promise<Props> => {
	const handle = query.handle as string;
	const product = await getSingleProduct(handle);

	return {product};
};

export default Product;

import React, {Dispatch, FC, SetStateAction} from 'react';
import {A11y, Keyboard, Navigation, Pagination, Swiper} from 'swiper';
import {Swiper as SwiperMain, SwiperSlide} from 'swiper/react';
import {SingleProduct} from '../services/product';
import Image from 'next/image';

interface Props {
	setSwiper: Dispatch<SetStateAction<Swiper | undefined>>;
	product: SingleProduct;
}

export const ProductSwiper: FC<Props> = ({product, setSwiper}) => (
	<SwiperMain
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
	</SwiperMain>
);

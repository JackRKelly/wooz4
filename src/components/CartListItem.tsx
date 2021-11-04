import React from 'react';
import Image from 'next/image';
import {useImmer} from 'use-immer';
import {useDebounce} from 'react-use';
import {useQueryClient, useMutation} from 'react-query';
import {CartItem, removeCartItem, updateCartItem} from '../services/cart';
import {CART_QUERY, CART_ITEM_COUNT_QUERY} from '../const/query';
import {formatPrice} from '../util/intl';
import Link from 'next/link';
import {Close} from '../assets/svg';
import {NormalizedButton} from './Normalized.styled';
import styled from 'styled-components';
import {FlexColumnWrapper, FlexRowWrapper} from './Flex.styled';
import {colors} from '../const';

interface Props {
	item: CartItem;
}

interface State {
	quantity: number;
}

const QuantityInput = styled.input`
	width: 2rem;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

const ProductImageWrapper = styled.div`
	background-color: ${colors.lighterGray};
	border-radius: 3px;
`;

export const CartListItem: React.FC<Props> = ({item}) => {
	const queryClient = useQueryClient();
	const [state, setState] = useImmer<State>({quantity: item.quantity});

	function refetchCart() {
		void queryClient.invalidateQueries(CART_QUERY);
		void queryClient.invalidateQueries(CART_ITEM_COUNT_QUERY);
	}

	const updateQuantity = useMutation(
		async (quantity: number) => updateCartItem({id: item.id, quantity}),
		{
			onSuccess: refetchCart,
			onError: () => {
				setState(draft => {
					draft.quantity = item.quantity;
				});
			},
		},
	);

	const remove = useMutation(removeCartItem, {
		onSuccess: () => {
			refetchCart();
		},
	});

	useDebounce(
		() => {
			if (item.quantity !== state.quantity) {
				void updateQuantity.mutateAsync(state.quantity);
			}
		},
		1000,
		[state.quantity, item.quantity],
	);

	const disabled = updateQuantity.isLoading || remove.isLoading;

	return (
		<FlexRowWrapper margin="0 0 1rem 0">
			<ProductImageWrapper>
				<Link passHref href={item.variant.url}>
					<a>
						<Image
							src={item.variant.image.src}
							alt={item.variant.image.alt}
							width={150}
							height={150}
						/>
					</a>
				</Link>
			</ProductImageWrapper>
			<FlexColumnWrapper>
				<Link href={item.variant.url}>
					<a>
						{item.title} ({item.variant.title})
					</a>
				</Link>
				<div>
					<button
						type="button"
						disabled={!(state.quantity < 99)}
						onClick={() => {
							setState(draft => {
								if (draft.quantity < 99) {
									draft.quantity += 1;
								}
							});
						}}
					>
						+
					</button>
					<QuantityInput
						type="number"
						max="99"
						min="1"
						disabled={disabled}
						value={state.quantity}
						onChange={event => {
							if (Number(event.target.value) > 99) {
								setState(draft => {
									draft.quantity = 99;
								});
							} else {
								setState(draft => {
									draft.quantity = Number(event.target.value) || 1;
								});
							}
						}}
					/>
					<button
						type="button"
						disabled={!(state.quantity > 1)}
						onClick={() => {
							setState(draft => {
								if (draft.quantity > 1) {
									draft.quantity -= 1;
								}
							});
						}}
					>
						-
					</button>
				</div>
			</FlexColumnWrapper>
			<span>{formatPrice(item.variant.price)}</span>
			<span>
				{formatPrice({
					amount: item.variant.price.amount * item.quantity,
					currencyCode: item.variant.price.currencyCode,
				})}
			</span>
			<NormalizedButton
				type="button"
				cursor="pointer"
				disabled={disabled}
				onClick={async () => {
					void new Audio('/pop.mp3').play().catch(() => null);
					return remove.mutateAsync(item.id);
				}}
			>
				<Close />
			</NormalizedButton>
		</FlexRowWrapper>
	);
};

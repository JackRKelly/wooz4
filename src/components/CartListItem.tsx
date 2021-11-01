import React from 'react';
import Image from 'next/image';
import {useImmer} from 'use-immer';
import {useDebounce} from 'react-use';
import {useQueryClient, useMutation} from 'react-query';
import {CartItem, removeCartItem, updateCartItem} from '../services/cart';
import {CART_QUERY, CART_ITEM_COUNT_QUERY} from '../const/query';
import {formatPrice} from '../util/intl';
import Link from 'next/link';

interface Props {
	item: CartItem;
}

interface State {
	quantity: number;
}

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
		<div>
			<Link passHref href={item.variant.url}>
				<a>
					<Image
						src={item.variant.image.src}
						alt={item.variant.image.alt}
						width={200}
						height={200}
					/>
				</a>
			</Link>

			<Link href={item.variant.url}>
				<a>
					{item.title} ({item.variant.title})
				</a>
			</Link>

			<input
				type="number"
				disabled={disabled}
				value={state.quantity}
				onChange={event => {
					setState(draft => {
						draft.quantity = Number(event.target.value) || 1;
					});
				}}
			/>

			<span>{formatPrice(item.variant.price)}</span>
			<span>
				{formatPrice({
					amount: item.variant.price.amount * item.quantity,
					currencyCode: item.variant.price.currencyCode,
				})}
			</span>

			<button
				type="button"
				disabled={disabled}
				onClick={async () => {
					void new Audio('/pop.mp3').play().catch(() => null);
					return remove.mutateAsync(item.id);
				}}
			>
				deleteicon
			</button>
		</div>
	);
};

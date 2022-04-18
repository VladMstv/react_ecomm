import { CartItem } from 'models/cart-item.model'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
	decreaseQuantity,
	increaseQuantity,
	removeProduct,
} from 'redux/cart/cart.actions'

interface CheckoutItemProps {
	cartItem: CartItem
}

function CheckoutItem(props: CheckoutItemProps) {
	const dispatch = useDispatch()

	const {
		cartItem: { product, quantity },
	} = props

	const { id, imageUrl, price, name } = product

	const increase = () => dispatch(increaseQuantity(id))
	const decrease = () => dispatch(decreaseQuantity(id))

	return (
		<>
			<div>
				<img alt={name} className='h-20 w-auto max-w-full' src={imageUrl} />
			</div>
			<div>{name}</div>
			<span className='flex w-full max-w-20 items-center justify-between'>
				<button
					type='button'
					className='text-lg font-semibold opacity-50 hover:opacity-100'
					onClick={decrease}
				>
					-
				</button>
				{quantity}
				<button
					type='button'
					className='text-lg font-semibold opacity-50 hover:opacity-100'
					onClick={increase}
				>
					+
				</button>
			</span>
			<span>${price * quantity}</span>
			<span>
				<button
					type='button'
					className='text-red-500 opacity-50 hover:opacity-100'
					onClick={() => dispatch(removeProduct(product))}
				>
					✖
				</button>
			</span>
		</>
	)
}

export default CheckoutItem

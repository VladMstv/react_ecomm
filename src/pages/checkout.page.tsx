import { selectCartItems } from 'features/cart'
import CheckoutItem from 'features/checkout/components/checkout-item.component'
import React from 'react'
import { useSelector } from 'react-redux'

const headerLabels = ['Product', 'Description', 'Quantity', 'Price total', 'Remove']

function Divider() {
	return (
		<span className='border-b justify-self-stretch border-gray-500 col-span-5' />
	)
}

function Checkout() {
	const cartItems = useSelector(selectCartItems)
	
	return (
		<div className='checkout max-w-240 mx-auto overflow-x-auto'>
			<h1 className='text-2xl mb-10 font-semibold'>Checkout</h1>
			{cartItems.length > 0 ? (
				<div className='checkout-table-wrapper'>
					<div className='checkout-grid-container grid justify-items-center items-center grid-cols-5 gap-4 max-w-240 min-w-180'>
						{headerLabels.map(label => (
							<div key={label} className='justify-self-center'>
								{label}
							</div>
						))}
						<Divider />

						{cartItems.map(cartItem => {
							const { id } = cartItem.product
							return <CheckoutItem key={id} cartItem={cartItem} />
						})}
					</div>
				</div>
			) : (
				<div className='my-10 flex justify-center text-lg'>Your cart is empty</div>
			)}
		</div>
	)
}

export default Checkout

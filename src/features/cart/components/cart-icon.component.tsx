import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount, toggleCartHidden } from 'features/cart'

function CartIcon(): JSX.Element {
	const dispatch = useDispatch()

	const itemCount = useSelector(selectCartItemsCount)

	const handleClick = () => dispatch(toggleCartHidden())

	return (
		<button
			type='button'
			className='cart-icon w-8 h-8 relative flex items-center justify-center cursor-pointer'
			onClick={handleClick}
		>
			<ShoppingIcon className='shopping-icon w-6 h-6' />
			<span className='item-count absolute text-sm font-semibold bottom-0.5'>
				{itemCount}
			</span>
		</button>
	)
}

export default CartIcon

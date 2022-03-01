import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { toggleCartHidden } from 'redux/cart/cart.actions'

interface CartIconDispatchProps {
	toggleCartHiddenFn: typeof toggleCartHidden
}

type CartIconProps = CartIconDispatchProps

const mapDispatchToProps: MapDispatchToProps<
	CartIconDispatchProps,
	Record<string, never>
> = dispatch => ({
	toggleCartHiddenFn: () => dispatch(toggleCartHidden()),
})

function CartIcon(props: CartIconProps): JSX.Element {
	const { toggleCartHiddenFn } = props
	return (
		<button
			type='button'
			className='cart-icon w-8 h-8 relative flex items-center justify-center cursor-pointer'
			onClick={toggleCartHiddenFn}
		>
			<ShoppingIcon className='shopping-icon w-6 h-6' />
			<span className='item-count absolute text-sm font-semibold bottom-0.5'>
				0
			</span>
		</button>
	)
}

export default connect(null, mapDispatchToProps)(CartIcon)

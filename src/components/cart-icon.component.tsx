import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { toggleCartHidden } from 'redux/cart/cart.actions'
import { selectCartItemsCount } from 'redux/cart/cart.selectors'
import { RootState } from 'redux/store'
import { createStructuredSelector } from 'reselect'

interface CartIconDispatchProps {
	toggleCartHiddenFn: typeof toggleCartHidden
}

interface CartIconStateProps {
	itemCount: number
}

type CartIconProps = CartIconDispatchProps & CartIconStateProps

const mapDispatchToProps: MapDispatchToProps<
	CartIconDispatchProps,
	Record<string, never>
> = dispatch => ({
	toggleCartHiddenFn: () => dispatch(toggleCartHidden()),
})

function CartIcon(props: CartIconProps): JSX.Element {
	const { toggleCartHiddenFn, itemCount } = props
	return (
		<button
			type='button'
			className='cart-icon w-8 h-8 relative flex items-center justify-center cursor-pointer'
			onClick={toggleCartHiddenFn}
		>
			<ShoppingIcon className='shopping-icon w-6 h-6' />
			<span className='item-count absolute text-sm font-semibold bottom-0.5'>
				{itemCount}
			</span>
		</button>
	)
}

const mapStateToProps: MapStateToProps<
	CartIconStateProps,
	Record<string, never>,
	RootState
> = createStructuredSelector({ itemCount: selectCartItemsCount })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

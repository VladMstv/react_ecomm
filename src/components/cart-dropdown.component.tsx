import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { CartState } from 'redux/cart/cart.reducer'
import { RootState } from 'redux/store'
import CustomButton from './custom-button.component'

type CartDropdownStateProps = Pick<CartState, 'hidden'>

type Props = CartDropdownStateProps

const mapStateToProps: MapStateToProps<
	CartDropdownStateProps,
	Record<string, never>,
	RootState
> = state => state.cart

function CartDropdown(props: Props): JSX.Element {
	const { hidden } = props
	return (
		<div
			className={`cart-dropdown absolute w-72 h-90 flex flex-col p-5 border border-black bg-white top-16 right-0 z-50 ${
				hidden ? 'hidden' : ''
			}`}
		>
			<div className='cart-items flex-auto mb-4 flex flex-col overflow-y-scroll'>
				1
			</div>
			<CustomButton classes='mt-auto'>Go to checkout</CustomButton>
		</div>
	)
}

export default connect(mapStateToProps)(CartDropdown)

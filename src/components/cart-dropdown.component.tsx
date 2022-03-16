import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { CartState } from 'redux/cart/cart.reducer'
import { selectCartItems } from 'redux/cart/cart.selectors'
import { RootState } from 'redux/store'
import CustomButton from './custom-button.component'

type CartDropdownStateProps = Pick<CartState, 'hidden' | 'cartItems'>

type Props = CartDropdownStateProps

const mapStateToProps: MapStateToProps<
	CartDropdownStateProps,
	Record<string, never>,
	RootState
> = state => ({
	cartItems: selectCartItems(state),
	hidden: state.cart.hidden,
})

function CartDropdown(props: Props): JSX.Element {
	const { hidden, cartItems } = props
	console.log('dropdown rerender')
	return (
		<div
			className={`cart-dropdown absolute w-72 h-90 flex flex-col p-5 border border-black bg-white top-16 right-0 z-50 ${
				hidden ? 'hidden' : ''
			}`}
		>
			<div className='cart-items flex-auto mb-4 flex flex-col overflow-y-auto gap-5'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<div className='cart-item flex items-center gap-3' key={cartItem.item.id}>
							<span
								style={{ backgroundImage: `url(${cartItem.item.imageUrl})` }}
								className='h-10 w-10 mr-2 bg-cover bg-center bg-no-repeat'
							/>
							<div className='text-md'>{cartItem.item.name}</div>
							<div className='text-md'>x {cartItem.quantity}</div>
						</div>
					))
				) : (
					<div className='text-lg flex flex-1 mx-auto items-center'>
						<span>Cart is empty</span>
					</div>
				)}
			</div>
			<CustomButton classes='mt-auto'>Go to checkout</CustomButton>
		</div>
	)
}

export default connect(mapStateToProps)(CartDropdown)

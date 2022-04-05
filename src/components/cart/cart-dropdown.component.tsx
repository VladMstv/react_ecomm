import React, { useCallback, useEffect, useRef } from 'react'
import { connect, MapStateToProps, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from 'redux/cart/cart.actions'
import { CartState } from 'redux/cart/cart.reducer'
import { selectCartItems } from 'redux/cart/cart.selectors'
import { RootState } from 'redux/store'
import CustomButton from '../shared/custom-button.component'

type CartDropdownStateProps = Pick<CartState, 'cartItems'>

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
	const { cartItems } = props

	const navigate = useNavigate()

	// ref for detecting click outside cart dropdown
	const ref = useRef<HTMLDivElement>(null)

	const dispatch = useDispatch()

	// callback for listener of clicks outside of the dropdown
	const checkClickedInsideDropdown = useCallback(
		(e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				dispatch(toggleCartHidden())
			}
		},
		[ref, dispatch]
	)

	// register event listener for clicks outside dropdown
	useEffect(() => {
		document.addEventListener('click', checkClickedInsideDropdown)

		return () => {
			document.removeEventListener('click', checkClickedInsideDropdown)
		}
	}, [checkClickedInsideDropdown])

	const goToCheckoutHandler = () => {
		navigate('checkout')
		dispatch(toggleCartHidden())
	}

	console.log('render cart-dropdown')

	return (
		<div
			ref={ref}
			className='cart-dropdown absolute w-72 h-90 flex flex-col p-5 border border-black bg-white top-16 right-0 z-50'
		>
			<div className='cart-items flex-auto mb-4 flex flex-col overflow-y-auto gap-5'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<div
							className='cart-item flex items-center gap-3'
							key={cartItem.product.id}
						>
							<span
								style={{ backgroundImage: `url(${cartItem.product.imageUrl})` }}
								className='h-10 w-10 mr-2 bg-cover bg-center bg-no-repeat'
							/>
							<div className='text-md'>{cartItem.product.name}</div>
							<div className='text-md'>x {cartItem.quantity}</div>
						</div>
					))
				) : (
					<div className='text-lg flex flex-1 mx-auto items-center'>
						<span>Cart is empty</span>
					</div>
				)}
			</div>
			<CustomButton classes='mt-auto' handleClick={goToCheckoutHandler}>
				Go to checkout
			</CustomButton>
		</div>
	)
}

export default connect(mapStateToProps)(CartDropdown)

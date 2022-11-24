import { ReactComponent as Logo } from 'assets/crown.svg'
import { signOutStart } from 'features/authentication/state/user'
import { selectCurrentUser } from 'features/authentication/state/user/user.selectors'
import CartIcon from 'features/cart/components/cart-icon.component'
import { selectCartOpened } from 'features/cart/state/cart.selectors'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartDropdown from '../../features/cart/components/cart-dropdown.component'
import Header from './header.styles'

export const HeaderInitialPaddingTopRem = 2.5

type HeaderProps = {
	isSticky: boolean
}

function HeaderComponent({ isSticky = true }: HeaderProps): JSX.Element {
	const dropdownShown = useSelector(selectCartOpened)

	const currentUser = useSelector(selectCurrentUser)

	const dispatch = useDispatch()

	const optionLinksClassess = 'font-semibold hover:opacity-70'

	return (
		<Header isSticky={isSticky}>
			<Link className='logo-container h-full pb-5 pt-5 flex items-center' to='/'>
				<Logo className='logo mr-3' />
				<span className='text-3xl font-semibold'>REACTOZO SHOP</span>
			</Link>
			<div className='options flex gap-5 items-center'>
				<Link className={optionLinksClassess} to='/shop'>
					SHOP
				</Link>
				<Link className={optionLinksClassess} to='/contact'>
					CONTACT
				</Link>

				{currentUser ? (
					<button type='button' onClick={() => dispatch(signOutStart())}>
						SIGN OUT
					</button>
				) : (
					<Link className={optionLinksClassess} to='/sign-in'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>

			{dropdownShown && <CartDropdown />}
		</Header>
	)
}

export default HeaderComponent

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartOpened } from 'redux/cart/cart.selectors'
import { signOutStart } from 'redux/user'
import { selectCurrentUser } from 'redux/user/user.selectors'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartDropdown from '../cart/cart-dropdown.component'
import CartIcon from '../cart/cart-icon.component'

function Header(): JSX.Element {
	const dropdownShown = useSelector(selectCartOpened)

	const currentUser = useSelector(selectCurrentUser)

	const dispatch = useDispatch()

	const optionLinksClassess = 'font-semibold hover:opacity-70'
	return (
		<div className='header pt-10 mb-5 flex flex-wrap justify-between items-center relative'>
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
		</div>
	)
}

export default Header

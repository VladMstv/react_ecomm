import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from 'redux/store'
import { UserState } from 'redux/user/user.reducer'
import { ReactComponent as Logo } from '../assets/crown.svg'
import CartDropdown from './cart-dropdown.component'
import CartIcon from './cart-icon.component'

interface HeaderProps {
	handleSignOut: React.ReactEventHandler<HTMLButtonElement>
}

type StateProps = Pick<UserState, 'currentUser'>

type Props = HeaderProps & StateProps

function Header({ currentUser, handleSignOut }: Props): JSX.Element {
	const optionLinksClassess = 'font-semibold hover:opacity-70'
	return (
		<div className='header mb-5 flex justify-between items-center relative'>
			<Link className='logo-container h-full w-20 p-5' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options flex gap-5 items-center'>
				<Link className={optionLinksClassess} to='/shop'>
					SHOP
				</Link>
				<Link className={optionLinksClassess} to='/contact'>
					CONTACT
				</Link>

				{currentUser ? (
					<button type='button' onClick={handleSignOut}>
						SIGN OUT
					</button>
				) : (
					<Link className={optionLinksClassess} to='/sign-in'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>

			<CartDropdown />
		</div>
	)
}

const mapStateToProps: MapStateToProps<UserState, HeaderProps, RootState> = (
	state,
	ownProps
) => ({
	...ownProps,
	currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)

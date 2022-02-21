import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/crown.svg'

function Header() {
	const optionLinksClassess = 'font-semibold hover:opacity-70'
	return (
		<div className='header mb-5 flex justify-between items-center'>
			<Link className='logo-container h-full w-20 p-5' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options flex gap-5'>
				<Link className={optionLinksClassess} to='/shop'>
					SHOP
				</Link>
				<Link className={optionLinksClassess} to='/contact'>
					CONTACT
				</Link>
			</div>
		</div>
	)
}

export default Header

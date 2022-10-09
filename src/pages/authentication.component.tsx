import SignIn from 'components/authentication/sign-in.component'
import SignUp from 'components/authentication/sign-up.component'
import React from 'react'

function Authentication() {
	return (
		<div className='sign-in-up-page max-w-240 mx-auto flex justify-between flex-wrap gap-7'>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default Authentication

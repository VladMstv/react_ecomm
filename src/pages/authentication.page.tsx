import SignIn from 'features/authentication/components/sign-in.component'
import SignUp from 'features/authentication/components/sign-up.component'
import React from 'react'

function Authentication() {
	return (
		<div className='pt-4 max-w-240 mx-auto flex justify-between flex-wrap gap-7'>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default Authentication

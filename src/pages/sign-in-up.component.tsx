import SignIn from 'components/sign-in.component'
import SignUp from 'components/sign-up.component'
import React from 'react'

function SignInUpPage() {
	return (
		<div className='sign-in-up-page max-w-240 mx-auto flex justify-between'>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SignInUpPage

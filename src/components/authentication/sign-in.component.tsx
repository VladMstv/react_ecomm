import React, { FormEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	emailSignInStart,
	googleSignInStart,
	selectUserLoading,
} from 'redux/user'
import CustomButton from '../shared/custom-button.component'
import FormInput from '../shared/form-input.component'

export default function SignIn() {
	const dispatch = useDispatch()

	const [formVals, setFormVals] = useState({ email: '', password: '' })

	const loading = useSelector(selectUserLoading)

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const { email, password } = formVals
		try {
			dispatch(emailSignInStart(email, password))
		} catch (error: any) {
			alert('Email or password incorrect')
		}
	}

	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		const { value, name }: { value: string; name: string } =
			event.target as HTMLInputElement
		setFormVals({ ...formVals, [name]: value })
	}

	const handleSignInWithGoogle = useCallback(() => {
		dispatch(googleSignInStart())
	}, [dispatch])

	const { email, password } = formVals

	return (
		<div className='sign-in-form max-w-100 w-full'>
			<h2 className='font-semibold text-lg'>I already have an account</h2>
			<span className=''>Sign In with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					id='sign-in-email'
					value={email}
					name='email'
					type='email'
					handleChange={handleChange}
				/>
				<FormInput
					label='Password'
					id='sign-in-password'
					value={password}
					type='password'
					name='password'
					handleChange={handleChange}
				/>

				<div className='flex w-full'>
					<CustomButton isSubmit classes='flex-auto'>
						SIGN IN
					</CustomButton>
					<CustomButton
						handleClick={handleSignInWithGoogle}
						classes='flex-auto ml-3 bg-blue-500 border-blue-500 hover:border-black'
					>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

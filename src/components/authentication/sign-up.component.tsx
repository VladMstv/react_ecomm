import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpStart } from 'redux/user'
import CustomButton from '../shared/custom-button.component'
import FormInput from '../shared/form-input.component'

interface SignUpState {
	email: string
	password: string
	displayName: string
	confirmPassword: string
}

const initialState: SignUpState = {
	email: '',
	password: '',
	displayName: '',
	confirmPassword: '',
}

export default function SignUp() {
	const [formState, setFormState] = useState(initialState)
	const dispatch = useDispatch()

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		const { displayName, password, confirmPassword, email } = formState

		// if password don't match - show error
		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		dispatch(signUpStart(email, password, { displayName }))
	}

	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		const { name, value } = event.target as HTMLInputElement

		setFormState(oldState => ({
			...oldState,
			[name]: value,
		}))
	}

	const { displayName, password, confirmPassword, email } = formState
	return (
		<div className='sign-up max-w-100 w-full'>
			<h2 className='font-semibold text-lg'>I don&apos;t have an account yet</h2>
			<span>Sign up with email and password</span>

			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					label='Display Name'
					name='displayName'
					value={displayName}
					id='display-name'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='text'
					name='email'
					label='Email'
					value={email}
					id='email'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					label='Password'
					value={password}
					id='password'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					label='Confirm password'
					value={confirmPassword}
					id='confirm-password'
					handleChange={handleChange}
					required
				/>

				<CustomButton classes='mx-auto min-w-50' isSubmit>
					SIGN UP
				</CustomButton>
			</form>
		</div>
	)
}

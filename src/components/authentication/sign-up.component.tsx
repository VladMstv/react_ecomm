import React, { FormEvent } from 'react'
import { createUserWithEmailPassword } from 'utils/firebase/firebase.util'
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

export default class SignUp extends React.Component<unknown, SignUpState> {
	constructor(props = {}) {
		super(props)

		this.state = initialState
	}

	handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		const { displayName, password, confirmPassword, email } = this.state

		// if password don't match - show error
		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		// if creating user is successful - reset the form
		if (await createUserWithEmailPassword({ email, password }, { displayName })) {
			this.setState(initialState)
		}
	}

	handleChange = (event: FormEvent<HTMLInputElement>) => {
		const { name, value } = event.target as HTMLInputElement

		this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>)
	}

	render(): React.ReactNode {
		const { displayName, password, confirmPassword, email } = this.state
		return (
			<div className='sign-up max-w-100 w-full'>
				<h2 className='font-semibold text-lg'>I don&apos;t have an account yet</h2>
				<span>Sign up with email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						label='Display Name'
						name='displayName'
						value={displayName}
						id='display-name'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='text'
						name='email'
						label='Email'
						value={email}
						id='email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						label='Password'
						value={password}
						id='password'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						label='Confirm password'
						value={confirmPassword}
						id='confirm-password'
						handleChange={this.handleChange}
						required
					/>

					<CustomButton classes='mx-auto min-w-50' isSubmit>
						SIGN UP
					</CustomButton>
				</form>
			</div>
		)
	}
}

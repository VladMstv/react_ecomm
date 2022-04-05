import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { FormEvent } from 'react'
import { auth, sgnInWithGooglePopup } from 'utils/firebase/firebase.util'
import CustomButton from '../shared/custom-button.component'
import FormInput from '../shared/form-input.component'

interface SignInState {
	email: string
	password: string
}
export default class SignIn extends React.Component<unknown, SignInState> {
	constructor(props = {}) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { email, password } = this.state
		try {
			await signInWithEmailAndPassword(auth, email, password)
			this.setState({ email: '', password: '' })
		} catch (error: any) {
			alert('Email or password incorrect')
		}
	}

	handleChange = (event: FormEvent<HTMLInputElement>) => {
		const { value, name }: { value: string; name: string } =
			event.target as HTMLInputElement
		this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>)
	}

	render() {
		const { email, password } = this.state
		return (
			<div className='sign-in-form max-w-100 w-full'>
				<h2 className='font-semibold text-lg'>I already have an account</h2>
				<span className=''>Sign In with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='Email'
						id='sign-in-email'
						value={email}
						name='email'
						type='email'
						handleChange={this.handleChange}
					/>
					<FormInput
						label='Password'
						id='sign-in-password'
						value={password}
						type='password'
						name='password'
						handleChange={this.handleChange}
					/>

					<div className='flex w-full'>
						<CustomButton isSubmit classes='flex-auto'>
							SIGN IN
						</CustomButton>
						<CustomButton
							handleClick={sgnInWithGooglePopup}
							classes='flex-auto ml-3 bg-blue-500 border-blue-500 hover:border-black'
						>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

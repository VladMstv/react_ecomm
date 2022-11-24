import React, { FormEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	emailSignInStart,
	googleSignInStart,
	selectUserLoading,
} from 'features/authentication/state/user'
import CustomButton from 'shared/components/custom-button.component'
import FormInput from 'shared/components/form-input.component'
import googleLogo from 'assets/google-icon.svg'

interface SignInForm {
	email: string
	password: string
}

function validate(input: SignInForm): boolean {
	if (!input.email || !input.password) {
		return false
	}
	return true
}

export default function SignIn() {
	const dispatch = useDispatch()

	const [formVals, setFormVals] = useState<SignInForm>({
		email: '',
		password: '',
	})

	const loading = useSelector(selectUserLoading)

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		if (validate(formVals)) {
			event.preventDefault()
			const { email, password } = formVals
			try {
				dispatch(emailSignInStart(email, password))
			} catch (error: any) {
				alert('Email or password incorrect')
			}
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
			<div className='text-center'>
				<h2 className='font-semibold text-lg uppercase'>
					I already have an account
				</h2>
				<div>Sign In with your email and password</div>
			</div>

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
					<CustomButton isLoading={loading} isSubmit classes='flex-auto'>
						SIGN IN
					</CustomButton>
					<CustomButton
						isLoading={loading}
						handleClick={handleSignInWithGoogle}
						buttonVariant='inverted'
						classes='flex-auto items-center ml-3'
					>
						<img src={googleLogo} className='w-4 h-4 mr-2' alt='google logo' />
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

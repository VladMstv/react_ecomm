import AppUser from 'models/user.model'
import { createAction } from 'redux/utils/action-creator'
import {
	CheckUser,
	EmailSignInStart,
	GoogleSignInStart,
	SignInFailed,
	SignInSuccess,
} from './user.types'

export const checkUserSession = (): CheckUser =>
	createAction('CHECK_USER_SESSION')

export const googleSignInStart = (): GoogleSignInStart =>
	createAction('GOOGLE_SIGN_IN_START')

export const emailSignInStart = (
	email: string,
	password: string
): EmailSignInStart => createAction('EMAIL_SIGN_IN_START', { email, password })

export const signInSuccess = (user: AppUser | null): SignInSuccess =>
	createAction('SIGN_IN_SUCCESS', user) as SignInSuccess

export const signInFailed = (error: any): SignInFailed =>
	createAction('SIGN_IN_FAILED', error) as SignInFailed

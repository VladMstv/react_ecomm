import AppUser from 'models/user.model'
import { Action } from 'redux'
import { ActionTypes } from 'redux/utils/action-types'
import { ActionWPayload } from 'redux/utils/payload-action'

export type CheckUser = Action<'CHECK_USER_SESSION'>
export type GoogleSignInStart = Action<'GOOGLE_SIGN_IN_START'>
export type EmailSignInStart = ActionWPayload<
	'EMAIL_SIGN_IN_START',
	{ email: string; password: string }
>
export type SignInSuccess = ActionWPayload<'SIGN_IN_SUCCESS', AppUser | null>
export type SignInFailed = ActionWPayload<'SIGN_IN_FAILED', any>

export type UserActions =
	| CheckUser
	| GoogleSignInStart
	| EmailSignInStart
	| SignInSuccess
	| SignInFailed

export type UserActionType = ActionTypes<UserActions>

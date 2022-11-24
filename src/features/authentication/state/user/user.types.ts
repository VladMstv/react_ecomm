import AppUser from 'features/authentication/models/user.model'
import { Action } from 'redux'
import { ActionWPayload } from 'shared/utils/payload-action'
import { UserAdditionalDetails } from 'shared/utils/firebase/firebase.util'

export enum UserActionType {
	CHECK_USER_SESSION = 'CHECK_USER_SESSION',
	GOOGLE_SIGNIN_START = 'GOOGLE_SIGN_IN_START',
	EMAIL_SIGNIN_START = 'EMAIL_SIGN_IN_START',
	SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED = 'SIGN_IN_FAILED',
	SIGN_OUT_START = 'SIGN_OUT_START',
	SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
	SIGN_UP_START = 'SIGN_UP_START',
	SIGN_UP_FAILED = 'SIGN_UP_FAILED',
}

export type CheckUserSession = Action<UserActionType.CHECK_USER_SESSION>

export type EmailSignInStart = ActionWPayload<
	UserActionType.EMAIL_SIGNIN_START,
	{ email: string; password: string }
>
export type GoogleSignInStart = Action<UserActionType.GOOGLE_SIGNIN_START>
export type SignInSuccess = ActionWPayload<
	UserActionType.SIGN_IN_SUCCESS,
	AppUser | null
>
export type SignInFailed = ActionWPayload<UserActionType.SIGN_IN_FAILED, object>

export type SignOutStart = Action<UserActionType.SIGN_OUT_START>
export type SignOutSuccess = Action<UserActionType.SIGN_OUT_SUCCESS>

export type SignUpStart = ActionWPayload<
	UserActionType.SIGN_UP_START,
	{ email: string; password: string; userDetails?: UserAdditionalDetails }
>
export type SignUpFailed = ActionWPayload<UserActionType.SIGN_UP_FAILED, object>

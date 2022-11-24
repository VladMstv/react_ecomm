import AppUser from 'features/authentication/models/user.model'
import { createAction } from 'shared/utils/action-creator'
import { withMatcher } from 'shared/utils/matchable'
import { UserAdditionalDetails } from 'shared/utils/firebase/firebase.util'
import {
	CheckUserSession,
	EmailSignInStart,
	GoogleSignInStart,
	SignInFailed,
	SignInSuccess,
	SignOutStart,
	SignOutSuccess,
	SignUpFailed,
	SignUpStart,
	UserActionType,
} from './user.types'

export const checkUserSession = withMatcher(
	(): CheckUserSession => createAction(UserActionType.CHECK_USER_SESSION)
)

export const googleSignInStart = withMatcher(
	(): GoogleSignInStart => createAction(UserActionType.GOOGLE_SIGNIN_START)
)

export const emailSignInStart = withMatcher(
	(email: string, password: string): EmailSignInStart =>
		createAction(UserActionType.EMAIL_SIGNIN_START, { email, password })
)

export const signInSuccess = withMatcher(
	(user: AppUser | null): SignInSuccess =>
		createAction(UserActionType.SIGN_IN_SUCCESS, user)
)

export const signInFailed = withMatcher(
	(error: any): SignInFailed =>
		createAction(UserActionType.SIGN_IN_FAILED, error)
)

export const signOutStart = withMatcher(
	(): SignOutStart => createAction(UserActionType.SIGN_OUT_START)
)
export const signOutSuccess = withMatcher(
	(): SignOutSuccess => createAction(UserActionType.SIGN_OUT_SUCCESS)
)

export const signUpStart = withMatcher(
	(
		email: string,
		password: string,
		additionalDetails: UserAdditionalDetails
	): SignUpStart =>
		createAction(UserActionType.SIGN_UP_START, {
			email,
			password,
			userDetails: additionalDetails,
		})
)

export const signUpFailed = withMatcher(
	(error: any): SignUpFailed =>
		createAction(UserActionType.SIGN_UP_FAILED, error)
)

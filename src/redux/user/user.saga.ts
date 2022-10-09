import {
	all,
	call,
	put,
	SagaReturnType,
	takeLatest,
	takeLeading,
} from 'redux-saga/effects'
import {
	createUserWithEmailPassword,
	getAppUserFromUserAuth,
	getCurrentUserPromise,
	signInWithEmailNPassword,
	signInWithGooglePopup,
	signOut,
} from 'utils/firebase/firebase.util'
import { signInFailed } from '.'
import { signInSuccess, signOutSuccess } from './user.actions'
import {
	CheckUserSession,
	EmailSignInStart,
	GoogleSignInStart,
	SignUpStart,
} from './user.types'

function* isUserAuthenticated() {
	try {
		const userAuth: SagaReturnType<typeof getCurrentUserPromise> = yield call(
			getCurrentUserPromise
		)
		if (!userAuth) return

		const user: SagaReturnType<typeof getAppUserFromUserAuth> = yield call(
			getAppUserFromUserAuth,
			userAuth
		)

		yield put(signInSuccess(user))
	} catch (err: any) {
		yield put(signInFailed(err))
	}
}

function* signInWithGoogle() {
	try {
		const { user: userAuth }: SagaReturnType<typeof signInWithGooglePopup> =
			yield call(signInWithGooglePopup)
		const user: SagaReturnType<typeof getAppUserFromUserAuth> = yield call(
			getAppUserFromUserAuth,
			userAuth
		)

		yield put(signInSuccess(user))
	} catch (err: any) {
		yield put(signInFailed(err))
	}
}

function* signInWithEmail(action: EmailSignInStart) {
	try {
		const { email, password } = action.payload
		const userCreds: SagaReturnType<typeof signInWithEmailNPassword> = yield call(
			signInWithEmailNPassword,
			email,
			password
		)

		const user: SagaReturnType<typeof getAppUserFromUserAuth> = yield call(
			getAppUserFromUserAuth,
			userCreds.user
		)

		yield put(signInSuccess(user))
	} catch (err: any) {
		yield put(signInFailed(err))
	}
}

function* signOutAttempt() {
	yield call(signOut)
	yield put(signOutSuccess())
}

function* signUp(action: SignUpStart) {
	try {
		const user: SagaReturnType<typeof createUserWithEmailPassword> = yield call(
			createUserWithEmailPassword,
			{
				email: action.payload.email,
				password: action.payload.password,
			},
			action.payload.userDetails
		)
		put(signInSuccess(user))
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			signInFailed('Email is already taken')
		} else {
			put(signInFailed('Something went wrong'))
		}
	}
}

export function* onUserCheckSession() {
	yield takeLatest<CheckUserSession>('CHECK_USER_SESSION', isUserAuthenticated)
}

export function* onGoogleSignInStart() {
	yield takeLatest<GoogleSignInStart>('GOOGLE_SIGN_IN_START', signInWithGoogle)
}
export function* onEmailSignInStart() {
	yield takeLatest<EmailSignInStart>('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* onSignOutStart() {
	yield takeLeading('SIGN_OUT_START', signOutAttempt)
}

export function* onSignUpStart() {
	yield takeLatest('SIGN_UP_START', signUp)
}

export function* userSagas() {
	yield all([
		call(onUserCheckSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
	])
}

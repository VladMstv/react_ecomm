import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import {
	getAppUserFromUserAuth,
	getCurrentUserPromise,
	signInWithEmailNPassword,
	signInWithGooglePopup
} from 'utils/firebase/firebase.util'
import { signInFailed } from '.'
import { signInSuccess } from './user.actions'
import { CheckUser, EmailSignInStart, GoogleSignInStart } from './user.types'

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

export function* onUserCheckSession() {
	yield takeLatest<CheckUser>('CHECK_USER_SESSION', isUserAuthenticated)
}

export function* onGoogleSignInStart() {
	yield takeLatest<GoogleSignInStart>('GOOGLE_SIGN_IN_START', signInWithGoogle)
}
export function* onEmailSignInStart() {
	yield takeLatest<EmailSignInStart>('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* userSagas() {
	yield all([
		call(onUserCheckSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
	])
}

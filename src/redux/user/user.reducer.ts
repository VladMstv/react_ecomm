import AppUser from 'models/user.model'
import { AnyAction, Reducer } from 'redux'
import {
	emailSignInStart,
	googleSignInStart,
	signInFailed,
	signInSuccess,
	signOutSuccess,
	signUpFailed,
	signUpStart,
} from './user.actions'

export interface UserState {
	currentUser: AppUser | null
	isLoading: boolean
	error: any
}

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
}

const userReducer: Reducer<UserState> = (
	state = INITIAL_STATE,
	action = {} as AnyAction
) => {
	if (emailSignInStart.match(action) || googleSignInStart.match(action)) {
		return {
			...state,
			isLoading: true,
		} as UserState
	}
	if (signInSuccess.match(action)) {
		return {
			...state,
			isLoading: false,
			currentUser: action.payload,
		} as UserState
	}
	if (signInFailed.match(action) || signUpFailed.match(action)) {
		return {
			...state,
			isLoading: false,
			error: action.payload,
		} as UserState
	}
	if (signOutSuccess.match(action) || signUpStart.match(action)) {
		return {
			...state,
			currentUser: null,
		}
	}

	return state
}

export default userReducer

import AppUser from 'models/user.model'
import { Reducer } from 'redux'
import { UserActions } from '.'

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

const userReducer: Reducer<UserState, UserActions> = (
	state = INITIAL_STATE,
	action = {} as UserActions
) => {
	switch (action.type) {
		case 'EMAIL_SIGN_IN_START':
		case 'GOOGLE_SIGN_IN_START':
			return {
				...state,
				isLoading: true,
			} as UserState

		case 'SIGN_IN_SUCCESS':
			return {
				...state,
				isLoading: false,
				currentUser: action.payload,
			} as UserState

		case 'SIGN_IN_FAILED':
			return {
				...state,
				isLoading: false,
				error: action.payload,
			} as UserState
		default:
			return state as UserState
	}
}

export default userReducer

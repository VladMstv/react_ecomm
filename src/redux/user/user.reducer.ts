import AppUser from 'models/user.model'
import { Reducer } from 'redux'
import { UserActions } from './user.actions'

export interface UserState {
	currentUser: AppUser | null
}

const INITIAL_STATE: UserState = {
	currentUser: null,
}

const userReducer: Reducer<UserState, UserActions> = (
	state = INITIAL_STATE,
	action = {} as UserActions
) => {
	switch (action.type) {
		case 'SET_USER_ACTION':
			return {
				...state,
				currentUser: action.payload,
			} as UserState

		default:
			return state as UserState
	}
}

export default userReducer

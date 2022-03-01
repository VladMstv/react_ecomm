import AppUser from 'models/user.model'
import { PayloadAction } from 'redux/utils/payload-action'

type SetUserAction = PayloadAction<'SET_USER_ACTION', AppUser | null>
export type UserActions = SetUserAction

export function setUser(user: AppUser | null): SetUserAction {
	return {
		type: 'SET_USER_ACTION',
		payload: user,
	}
}

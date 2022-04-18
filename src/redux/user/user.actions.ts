import AppUser from 'models/user.model'
import createAction from 'redux/utils/action-creator'
import { SetUserAction } from '.'

export const setUser = (user: AppUser | null): SetUserAction =>
	createAction('SET_USER_ACTION', user)

export default setUser

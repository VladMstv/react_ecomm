import AppUser from 'models/user.model'
import { PayloadAction } from 'redux/utils/payload-action'

export type SetUserAction = PayloadAction<'SET_USER_ACTION', AppUser | null>

export type UserActions = SetUserAction

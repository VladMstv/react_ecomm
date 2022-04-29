import AppUser from 'models/user.model'
import { ActionWPayload } from 'redux/utils/payload-action'

export type SetUserAction = ActionWPayload<'SET_USER_ACTION', AppUser | null>

export type UserActions = SetUserAction

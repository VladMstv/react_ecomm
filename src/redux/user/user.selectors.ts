import { createSelector } from 'reselect'
import { RootState } from '../store'

export const selectUserState = (state: RootState) => state.user

export const selectCurrentUser = createSelector(
	selectUserState,
	user => user.currentUser
)

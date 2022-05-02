import { createSelector } from 'reselect'
import { RootState } from '../store'

export const selectUserState = (state: RootState) => state.user

export const selectCurrentUser = createSelector(
	selectUserState,
	user => user.currentUser
)

export const selectUserError = createSelector(
	selectUserState,
	userState => userState.error
)

export const selectUserLoading = createSelector(
	selectUserState,
	userState => userState.isLoading
)

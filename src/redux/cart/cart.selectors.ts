import { createSelector } from 'reselect'
import { CartState } from '.'
import { RootState } from '../store'

const selectCartState = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
	selectCartState,
	cartState => cartState.cartItems
)

export const selectCartItemsCount = createSelector(selectCartItems, items =>
	items.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartOpened = createSelector(
	selectCartState,
	state => !state.hidden
)

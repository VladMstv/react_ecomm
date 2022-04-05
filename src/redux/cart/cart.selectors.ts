import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CartState } from './cart.reducer'

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

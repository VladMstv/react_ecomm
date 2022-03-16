import { CartItem } from 'models/cart-item.model'
import { Reducer } from 'redux'
import { CartAction } from './cart.actions'
import CartUtils from './cart.util'

export interface CartState {
	hidden: boolean
	cartItems: CartItem[]
}

const INITIAL_STATE: CartState = {
	hidden: true,
	cartItems: [],
}

const cartReducer: Reducer<CartState, CartAction> = (
	state = INITIAL_STATE,
	action = {} as CartAction
) => {
	switch (action.type) {
		case 'TOGGLE_CART_HIDDEN': {
			return {
				...state,
				hidden: !state.hidden,
			}
		}
		case 'ADD_ITEM': {
			return {
				...state,
				cartItems: CartUtils.AddItemToCart(state.cartItems, action.payload!),
			}
		}
		default:
			return state
	}
}

export default cartReducer

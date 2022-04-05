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
				cartItems: CartUtils.AddItemToCart(state.cartItems, action.payload),
			}
		}
		case 'INCREASE_QUANTITY': {
			return {
				...state,
				cartItems: CartUtils.IncreaseQuantity(state.cartItems, action.payload),
			}
		}
		case 'DECREASE_QUANTITY': {
			return {
				...state,
				cartItems: CartUtils.DecreaseQuantity(state.cartItems, action.payload),
			}
		}
		case 'REMOVE_PRODUCT': {
			const cartItem = state.cartItems.find(
				x => x.product.id === action.payload?.id
			)
			return {
				...state,
				cartItems: CartUtils.RemoveItem(state.cartItems, cartItem),
			}
		}
		default:
			return state
	}
}

export default cartReducer

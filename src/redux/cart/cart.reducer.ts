import { CartItem } from 'models/cart-item.model'
import { AnyAction, Reducer } from 'redux'
import {
	addItem,
	decreaseQuantity,
	increaseQuantity,
	removeProduct,
	toggleCartHidden,
} from './cart.actions'
import CartUtils from './cart.util'

export interface CartState {
	hidden: boolean
	cartItems: CartItem[]
}

const INITIAL_STATE: CartState = {
	hidden: true,
	cartItems: [],
}

const cartReducer: Reducer<CartState> = (
	state = INITIAL_STATE,
	action = {} as AnyAction
) => {
	if (toggleCartHidden.match(action)) {
		return {
			...state,
			hidden: !state.hidden,
		}
	}
	if (addItem.match(action)) {
		return {
			...state,
			cartItems: CartUtils.AddItemToCart(state.cartItems, action.payload),
		}
	}
	if (increaseQuantity.match(action)) {
		return {
			...state,
			cartItems: CartUtils.IncreaseQuantity(state.cartItems, action.payload),
		}
	}
	if (decreaseQuantity.match(action)) {
		return {
			...state,
			cartItems: CartUtils.DecreaseQuantity(state.cartItems, action.payload),
		}
	}
	if (removeProduct.match(action)) {
		const cartItem = state.cartItems.find(
			x => x.product.id === action.payload?.id
		)
		return {
			...state,
			cartItems: CartUtils.RemoveItem(state.cartItems, cartItem),
		}
	}
	return state
}

export default cartReducer

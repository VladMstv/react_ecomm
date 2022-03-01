import { Reducer } from 'redux'
import { CartAction } from './cart.actions'

export interface CartState {
	hidden: boolean
}

const INITIAL_STATE: CartState = {
	hidden: true,
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
		default:
			return state
	}
}

export default cartReducer

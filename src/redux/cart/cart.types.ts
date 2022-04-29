import Product from 'models/product.model'
import { Action } from 'redux'
import { ActionWPayload } from 'redux/utils/payload-action'

export type ToggleCartHiddenAction = Action<'TOGGLE_CART_HIDDEN'>
export type AddProductAction = ActionWPayload<'ADD_ITEM', Product>
export type IncreaseQuantityAction = ActionWPayload<
	'INCREASE_QUANTITY',
	Product['id']
>
export type RemoveProductAction = ActionWPayload<'REMOVE_PRODUCT', Product>
export type DecreaseQuantityAction = ActionWPayload<
	'DECREASE_QUANTITY',
	Product['id']
>

export type CartAction =
	| ToggleCartHiddenAction
	| AddProductAction
	| IncreaseQuantityAction
	| RemoveProductAction
	| DecreaseQuantityAction

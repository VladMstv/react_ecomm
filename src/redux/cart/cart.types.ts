import Product from 'models/product.model'
import { Action } from 'redux'
import { ActionWPayload } from 'redux/utils/payload-action'

export enum CartActionType {
	TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN',
	ADD_ITEM = 'cart/ADD_ITEM',
	REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT',
	INCREASE_QUANTITY = 'cart/INCREASE_QUANTITY',
	DECREASE_QUANTITY = 'cart/DECREASE_QUANTITY',
}

export type ToggleCartHiddenAction = Action<CartActionType.TOGGLE_CART_HIDDEN>
export type AddItemAction = ActionWPayload<CartActionType.ADD_ITEM, Product>
export type IncreaseQuantityAction = ActionWPayload<
	CartActionType.INCREASE_QUANTITY,
	Product['id']
>
export type RemoveProductAction = ActionWPayload<
	CartActionType.REMOVE_PRODUCT,
	Product
>
export type DecreaseQuantityAction = ActionWPayload<
	CartActionType.DECREASE_QUANTITY,
	Product['id']
>

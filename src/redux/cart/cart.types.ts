import Product from 'models/product.model'
import { PayloadAction } from 'redux/utils/payload-action'

export type ToggleCartHiddenAction = PayloadAction<'TOGGLE_CART_HIDDEN'>
export type AddProductAction = PayloadAction<'ADD_ITEM', Product>
export type IncreaseQuantityAction = PayloadAction<'INCREASE_QUANTITY', Product['id']>
export type RemoveProductAction = PayloadAction<'REMOVE_PRODUCT', Product>
export type DecreaseQuantityAction = PayloadAction<'DECREASE_QUANTITY', Product['id']>

export type CartAction =
	| ToggleCartHiddenAction
	| AddProductAction
	| IncreaseQuantityAction
	| RemoveProductAction
	| DecreaseQuantityAction

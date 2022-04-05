import Product from 'models/product.model'
import { PayloadAction } from 'redux/utils/payload-action'

type ToggleCartHiddenAction = PayloadAction<'TOGGLE_CART_HIDDEN'>
type AddProductAction = PayloadAction<'ADD_ITEM', Product>
type IncreaseQuantityAction = PayloadAction<'INCREASE_QUANTITY', Product['id']>
type RemoveProductAction = PayloadAction<'REMOVE_PRODUCT', Product>
type DecreaseQuantityAction = PayloadAction<'DECREASE_QUANTITY', Product['id']>

export function toggleCartHidden(): ToggleCartHiddenAction {
	return {
		type: 'TOGGLE_CART_HIDDEN',
	}
}

export function addProduct(product: Product): AddProductAction {
	return {
		type: 'ADD_ITEM',
		payload: product,
	}
}

export function increaseQuantity(id: number): IncreaseQuantityAction {
	return {
		type: 'INCREASE_QUANTITY',
		payload: id,
	}
}

export function removeProduct(product: Product): RemoveProductAction {
	return {
		type: 'REMOVE_PRODUCT',
		payload: product,
	}
}

export function decreaseQuantity(id: number): DecreaseQuantityAction {
	return {
		type: 'DECREASE_QUANTITY',
		payload: id,
	}
}

export type CartAction =
	| ToggleCartHiddenAction
	| AddProductAction
	| IncreaseQuantityAction
	| RemoveProductAction
	| DecreaseQuantityAction

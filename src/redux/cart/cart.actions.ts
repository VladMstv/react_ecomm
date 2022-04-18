import Product from 'models/product.model'
import createAction from 'redux/utils/action-creator'
import {
	AddProductAction,
	DecreaseQuantityAction,
	IncreaseQuantityAction,
	RemoveProductAction,
	ToggleCartHiddenAction,
} from '.'

export function toggleCartHidden(): ToggleCartHiddenAction {
	return createAction('TOGGLE_CART_HIDDEN')
}

export function addProduct(product: Product): AddProductAction {
	return createAction('ADD_ITEM', product)
}

export function increaseQuantity(id: number): IncreaseQuantityAction {
	return createAction('INCREASE_QUANTITY', id)
}

export function removeProduct(product: Product): RemoveProductAction {
	return createAction('REMOVE_PRODUCT', product)
}

export function decreaseQuantity(id: number): DecreaseQuantityAction {
	return createAction('DECREASE_QUANTITY', id)
}

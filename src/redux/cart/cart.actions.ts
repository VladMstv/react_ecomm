import Product from 'models/product.model'
import { createAction } from 'redux/utils/action-creator'
import { withMatcher } from 'redux/utils/matchable'
import {
	AddItemAction,
	CartActionType,
	DecreaseQuantityAction,
	IncreaseQuantityAction,
	RemoveProductAction,
	ToggleCartHiddenAction,
} from './cart.types'

export const toggleCartHidden = withMatcher(
	(): ToggleCartHiddenAction => createAction(CartActionType.TOGGLE_CART_HIDDEN)
)

export const addItem = withMatcher(
	(product: Product): AddItemAction =>
		createAction(CartActionType.ADD_ITEM, product)
)

export const increaseQuantity = withMatcher(
	(id: number): IncreaseQuantityAction =>
		createAction(CartActionType.INCREASE_QUANTITY, id)
)

export const removeProduct = withMatcher(
	(product: Product): RemoveProductAction =>
		createAction(CartActionType.REMOVE_PRODUCT, product)
)

export const decreaseQuantity = withMatcher(
	(id: number): DecreaseQuantityAction =>
		createAction(CartActionType.DECREASE_QUANTITY, id)
)

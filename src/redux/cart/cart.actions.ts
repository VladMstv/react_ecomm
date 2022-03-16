import ShopDataItem from 'models/shop-data-item.model'
import { PayloadAction } from 'redux/utils/payload-action'

type ToggleCartHiddenAction = PayloadAction<'TOGGLE_CART_HIDDEN'>
type AddItemAction = PayloadAction<'ADD_ITEM', ShopDataItem>

export type CartAction = ToggleCartHiddenAction | AddItemAction

export function toggleCartHidden(): ToggleCartHiddenAction {
	return {
		type: 'TOGGLE_CART_HIDDEN',
	}
}

export function addCartItem(item: ShopDataItem): AddItemAction {
	return {
		type: 'ADD_ITEM',
		payload: item,
	}
}

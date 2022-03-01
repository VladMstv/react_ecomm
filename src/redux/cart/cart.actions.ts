import { PayloadAction } from 'redux/utils/payload-action'

type ToggleCartHiddenAction = PayloadAction<'TOGGLE_CART_HIDDEN'>

export type CartAction = ToggleCartHiddenAction

export function toggleCartHidden(): ToggleCartHiddenAction {
	return {
		type: 'TOGGLE_CART_HIDDEN',
	}
}

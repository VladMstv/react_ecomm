import { CartItem } from 'models/cart-item.model'
import ShopDataItem from 'models/shop-data-item.model'

/**
 * Utility function to add a new item to the cart or increase quantity of an item in the cart
 * if it already exists
 * @param cartItems Current cart items array
 * @param itemToAdd Item to add to the cart
 * @returns New array filled with previous items and a new one
 */
function AddItemToCart(
	cartItems: CartItem[],
	itemToAdd: ShopDataItem
): CartItem[] {
	// check if item exists
	const newCartItems = [...cartItems]
	const existingItemId = newCartItems.findIndex(
		cartItem => cartItem.item.id === itemToAdd.id
	)
	if (existingItemId >= 0) {
		// if existst - increase quantity
		newCartItems[existingItemId] = {
			...newCartItems[existingItemId],
			quantity: newCartItems[existingItemId].quantity + 1,
		}
	} else {
		// add new item to cart
		newCartItems.push({ item: itemToAdd, quantity: 1 })
	}
	return newCartItems
}

const CartUtils = {
	AddItemToCart,
}

export default CartUtils

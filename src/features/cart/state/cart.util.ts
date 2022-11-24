import { CartItem } from 'features/cart/models/cart-item.model'
import Product from 'shared/models/product.model'

/**
 *
 * @param cartItems
 * @param id
 * @returns Returns the same items array if the item with provided ID doesn't exist
 */
function IncreaseQuantity(cartItems: CartItem[], id?: Product['id']) {
	if (!id) return cartItems
	const existingItemId = cartItems.findIndex(
		cartItem => cartItem.product.id === id
	)
	if (existingItemId < 0) return cartItems

	const newItems = [...cartItems]
	newItems[existingItemId] = {
		...newItems[existingItemId],
		quantity: newItems[existingItemId].quantity + 1,
	}
	return newItems
}
/**
 * Utility function to add a new item to the cart or increase quantity of an item in the cart
 * if it already exists
 * @param cartItems Current cart items array
 * @param itemToAdd Item to add to the cart
 * @returns New array filled with previous items and a new one
 */
function AddItemToCart(cartItems: CartItem[], itemToAdd?: Product): CartItem[] {
	if (!itemToAdd) return cartItems
	let newItems = IncreaseQuantity(cartItems, itemToAdd.id)
	// if array returned by IncreaseQuantity function is the same -> means there was no
	// item with provided id. We need to add one to the array
	if (newItems === cartItems) {
		// add new item to cart
		newItems.push({ product: itemToAdd, quantity: 1 })
		newItems = [...newItems]
	}
	return newItems
}

function DecreaseQuantity(
	cartItems: CartItem[],
	id?: Product['id'],
	decreaseBy = 1
) {
	if (!id) return cartItems
	const existingItemId = cartItems.findIndex(
		cartItem => cartItem.product.id === id
	)
	if (existingItemId < 0) return cartItems

	// if need to decrease quantity more than the current quantity -> remove item from the list
	if (cartItems[existingItemId].quantity - decreaseBy <= 0) {
		const newArray = [...cartItems]
		newArray.splice(existingItemId, 1)
		return newArray
	}

	const newItems = [...cartItems]

	newItems[existingItemId] = {
		...newItems[existingItemId],
		quantity: newItems[existingItemId].quantity - 1,
	}
	return newItems
}

function RemoveItem(cartItems: CartItem[], item?: CartItem) {
	if (!item) return cartItems
	return DecreaseQuantity(cartItems, item.product.id, item.quantity)
}

const CartUtils = {
	AddItemToCart,
	IncreaseQuantity,
	RemoveItem,
	DecreaseQuantity,
}

export default CartUtils

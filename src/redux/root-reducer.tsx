import { combineReducers } from 'redux'
import cartReducer from 'features/cart/state/cart.reducer'
import categoriesReducer from '../features/shop/state/categories/category.reducer'
import userReducer from '../features/authentication/state/user/user.reducer'

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
	categories: categoriesReducer,
})

import Product from 'models/product.model'
import ShopDataCategory from 'models/shop-data-category.model'
import { Reducer } from 'redux'
import SHOP_DATA from 'shop-data'
import { CategoryAction } from '.'

const catsMap: { [key: string]: Product[] } = {}

for (let index = 0; index < SHOP_DATA.length; index += 1) {
	const cat = SHOP_DATA[index]
	catsMap[cat.title] = cat.items
}

export interface CategoriesState {
	categories: ShopDataCategory[]
}

const initialState: CategoriesState = {
	categories: SHOP_DATA,
}

const categoriesReducer: Reducer<CategoriesState> = (
	state = initialState,
	action: CategoryAction = {} as CategoryAction
) => {
	switch (action.type) {
		case 'SET_CATEGORIES':
			return {
				...state,
				categories: action.payload || [],
			}
		default:
			return state
	}
}

export default categoriesReducer

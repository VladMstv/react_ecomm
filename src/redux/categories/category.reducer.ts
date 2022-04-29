import ShopDataCategory from 'models/shop-data-category.model'
import { Reducer } from 'redux'
import { CategoryAction } from '.'

export interface CategoriesState {
	categories: ShopDataCategory[]
	isLoading: boolean
	error: string | null
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
}

const categoriesReducer: Reducer<CategoriesState> = (
	state = initialState,
	action: CategoryAction = {} as CategoryAction
) => {
	switch (action.type) {
		case 'categories/FETCH_CATEGORIES_START':
			return {
				...state,
				isLoading: true,
			}
		case 'categories/FETCH_CATEGORIES_FAIL':
			return {
				...state,
				isLoading: false,
				error: action.payload || null,
			}
		case 'categories/FETCH_CATEGORIES_SUCCESS':
			return {
				...state,
				isLoading: false,
				categories: action.payload || [],
			}
		default:
			return state
	}
}

export default categoriesReducer

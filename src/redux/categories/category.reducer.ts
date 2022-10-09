import ShopDataCategory from 'models/shop-data-category.model'
import { AnyAction, Reducer } from 'redux'
import { fetchCategoriesStart } from 'redux/categories'
import { fetchCategoriesFail, fetchCategoriesSuccess } from './category.actions'

export interface CategoriesState {
	categories: ShopDataCategory[]
	isLoading: boolean
	error: Error | null
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
}

const categoriesReducer: Reducer<CategoriesState> = (
	state = initialState,
	action = {} as AnyAction
) => {
	if (fetchCategoriesStart.match(action)) {
		return {
			...state,
			isLoading: true,
		}
	}
	if (fetchCategoriesSuccess.match(action)) {
		return {
			...state,
			isLoading: false,
			categories: action.payload || [],
		}
	}
	if (fetchCategoriesFail.match(action)) {
		return {
			...state,
			isLoading: false,
			error: action.payload || null,
		}
	}
	return state
}

export default categoriesReducer

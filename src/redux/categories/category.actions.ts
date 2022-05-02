import ShopDataCategory from 'models/shop-data-category.model'
import { createAction } from 'redux/utils/action-creator'
import {
	FetchCategoriesFailAction,
	FetchCategoriesStartAction,
	FetchCategoriesSuccessAction,
} from './category.types'

export const fetchCategoriesSuccess = (
	categories: ShopDataCategory[]
): FetchCategoriesSuccessAction =>
	createAction('categories/FETCH_CATEGORIES_SUCCESS', categories)

export const fetchCategoriesStart = (): FetchCategoriesStartAction =>
	createAction('categories/FETCH_CATEGORIES_START')

export const fetchCategoriesFail = (
	error: string | null
): FetchCategoriesFailAction =>
	createAction(
		'categories/FETCH_CATEGORIES_FAIL',
		error || 'Something went wrong'
	)

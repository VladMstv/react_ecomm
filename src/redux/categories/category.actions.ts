import ShopDataCategory from 'models/shop-data-category.model'
import { createAction } from 'redux/utils/action-creator'
import { withMatcher } from 'redux/utils/matchable'
import {
	CategoryActionType,
	FetchCategoriesFailAction,
	FetchCategoriesStartAction,
	FetchCategoriesSuccessAction,
} from './category.types'

export const fetchCategoriesSuccess = withMatcher(
	(categories: ShopDataCategory[]): FetchCategoriesSuccessAction =>
		createAction(CategoryActionType.FETCH_CATEGORIES_SUCCESS, categories)
)

export const fetchCategoriesStart = withMatcher(
	(): FetchCategoriesStartAction =>
		createAction(CategoryActionType.FETCH_CATEGORIES_START)
)

export const fetchCategoriesFail = withMatcher(
	(error: Error | null): FetchCategoriesFailAction =>
		createAction(
			CategoryActionType.FETCH_CATEGORIES_FAIL,
			error || new Error('Something went wrong')
		)
)

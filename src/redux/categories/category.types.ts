import ShopDataCategory from 'models/shop-data-category.model'
import { Action } from 'redux'
import { ActionTypes } from 'redux/utils/action-types'
import { ActionWPayload } from 'redux/utils/payload-action'

export type FetchCategoriesStartAction =
	Action<'categories/FETCH_CATEGORIES_START'>
export type FetchCategoriesSuccessAction = ActionWPayload<
	'categories/FETCH_CATEGORIES_SUCCESS',
	ShopDataCategory[]
>
export type FetchCategoriesFailAction = ActionWPayload<
	'categories/FETCH_CATEGORIES_FAIL',
	string
>

export type CategoryAction =
	| FetchCategoriesStartAction
	| FetchCategoriesSuccessAction
	| FetchCategoriesFailAction

export type CategoryActionType = ActionTypes<CategoryAction>

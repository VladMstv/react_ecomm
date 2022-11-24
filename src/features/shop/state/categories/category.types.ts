import ShopDataCategory from 'features/shop/models/shop-data-category.model'
import { Action } from 'redux'
import { ActionWPayload } from 'shared/utils/payload-action'

export enum CategoryActionType {
	FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAIL = 'categories/FETCH_CATEGORIES_FAIL',
}

export type FetchCategoriesStartAction =
	Action<CategoryActionType.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccessAction = ActionWPayload<
	CategoryActionType.FETCH_CATEGORIES_SUCCESS,
	ShopDataCategory[]
>
export type FetchCategoriesFailAction = ActionWPayload<
	CategoryActionType.FETCH_CATEGORIES_FAIL,
	Error | null
>

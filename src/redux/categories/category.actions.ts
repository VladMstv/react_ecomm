import ShopDataCategory from 'models/shop-data-category.model'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { createAction } from 'redux/utils/action-creator'
import { getCollectionsAndDocuments } from 'utils/firebase/firebase.util'
import { CategoriesState } from './category.reducer'
import {
	CategoryAction,
	FetchCategoriesFailAction,
	FetchCategoriesStartAction,
	FetchCategoriesSuccessAction,
} from './category.types'
import { all, call } from 'redux-saga/effects'

export const FetchCategoriesSuccess = (
	categories: ShopDataCategory[]
): FetchCategoriesSuccessAction =>
	createAction('categories/FETCH_CATEGORIES_SUCCESS', categories)

export const FetchCategoriesStart = (): FetchCategoriesStartAction =>
	createAction('categories/FETCH_CATEGORIES_START')

export const FetchCategoriesFail = (
	error: string | null
): FetchCategoriesFailAction =>
	createAction(
		'categories/FETCH_CATEGORIES_FAIL',
		error || 'Something went wrong'
	)

export const FetchCategoriesAsync =
	(): ThunkAction<void, CategoriesState, unknown, CategoryAction> =>
	async (dispatch: Dispatch) => {
		dispatch(FetchCategoriesStart())
		try {
			const categories = await getCollectionsAndDocuments()
			dispatch(FetchCategoriesSuccess(categories))
		} catch (error: any) {
			dispatch(FetchCategoriesFail(error))
		}
	}


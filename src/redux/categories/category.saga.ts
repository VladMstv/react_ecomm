import { Dispatch } from 'redux'
import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { ThunkAction } from 'redux-thunk'
import { getCollectionsAndDocuments } from 'utils/firebase/firebase.util'
import { CategoriesState } from '.'
import {
	FetchCategoriesFail,
	FetchCategoriesStart,
	FetchCategoriesSuccess,
} from './category.actions'
import { CategoryAction } from './category.types'

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

export function* fetchCategoriesAsync() {
	try {
		const categories: SagaReturnType<typeof getCollectionsAndDocuments> =
			yield call(getCollectionsAndDocuments)
		yield put(FetchCategoriesSuccess(categories))
	} catch (error: any) {
		yield put(FetchCategoriesFail(error))
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		'categories/FETCH_CATEGORIES_START',
		getCollectionsAndDocuments
	)
}

export function* categoriesSaga() {
	yield all([getCollectionsAndDocuments])
}

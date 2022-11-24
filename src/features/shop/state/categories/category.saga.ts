import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { getCollectionsAndDocuments } from 'shared/utils/firebase/firebase.util'
import {
	CategoryActionType,
	fetchCategoriesFail,
	fetchCategoriesSuccess,
} from '.'

export function* fetchCategoriesAsync() {
	try {
		const categories: SagaReturnType<typeof getCollectionsAndDocuments> =
			yield call(getCollectionsAndDocuments)
		yield put(fetchCategoriesSuccess(categories))
	} catch (error: any) {
		yield put(fetchCategoriesFail(error))
	}
}

export function* onFetchCategories() {
	yield takeLatest<CategoryActionType>(
		CategoryActionType.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	)
}

export function* categoriesSagas() {
	yield all([call(onFetchCategories)])
}

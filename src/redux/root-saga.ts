import { all, call } from 'redux-saga/effects'
import { categoriesSagas } from '../features/shop/state/categories/category.saga'
import { userSagas } from '../features/authentication/state/user/user.saga'

export default function* rootSaga() {
	yield all([call(categoriesSagas), call(userSagas)])
}

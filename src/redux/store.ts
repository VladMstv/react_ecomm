import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)

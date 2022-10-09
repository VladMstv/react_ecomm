import { applyMiddleware, compose, createStore, Middleware } from 'redux'
import logger from 'redux-logger'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

export type RootState = ReturnType<typeof rootReducer>

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage,
	blacklist: ['user'],
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware))

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

const middlewares = [logger, thunk]

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))

export default store

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)

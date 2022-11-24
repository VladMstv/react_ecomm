import { Action } from 'redux'
export interface ActionWPayload<T, P> extends Action<T> {
	payload: P
}

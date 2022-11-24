import { Action } from 'redux'
import { ActionWPayload } from './payload-action'

export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWPayload<T, P>
export function createAction<T extends string>(
	type: T,
	payload: void
): Action<T>
export function createAction<T extends string, P>(type: T, payload: P) {
	return {
		type,
		payload,
	}
}

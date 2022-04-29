import { Action } from 'redux'
import { ActionWPayload } from './payload-action'

export type ActionType<T, P> = P extends undefined
	? Action<T>
	: ActionWPayload<T, P>

export function createAction<T = string, P = any>(
	type: T,
	payload?: P
): ActionType<T, P> {
	return {
		type,
		payload,
	} as ActionType<T, P>
}

import { Action } from 'redux'
import { ActionWPayload } from './payload-action'

export type ActionTypes<A> = A extends
	| ActionWPayload<infer T, infer P>
	| Action<infer T>
	? T
	: never

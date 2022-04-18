import { Action } from 'redux'
export interface PayloadAction<T = string, P = any> extends Action<T> {
	payload?: P
}

import { PayloadAction } from './payload-action'

function createAction<T = string, P = any>(
	type: T,
	payload?: P
): PayloadAction<T, P> {
	return {
		type,
		payload,
	}
}

export default createAction

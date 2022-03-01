export interface PayloadAction<T = string, P = any> {
	type: T
	payload?: P
}

import { AnyAction } from 'redux'

type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type']
	match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(
	// eslint-disable-next-line no-redeclare
	// eslint-disable-next-line no-unused-vars
	actionCreator: AC
): Matchable<AC>
// eslint-disable-next-line no-redeclare
export function withMatcher<
	// eslint-disable-next-line no-unused-vars
	AC extends (...args: any[]) => AnyAction & { type: string }
	// eslint-disable-next-line no-redeclare
	// eslint-disable-next-line no-unused-vars
>(actionCreator: AC): Matchable<AC>
// eslint-disable-next-line no-redeclare
export function withMatcher(actionCreator: () => any) {
	const { type } = actionCreator()
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type
		},
	})
}

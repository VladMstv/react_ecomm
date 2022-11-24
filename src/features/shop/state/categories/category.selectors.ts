import Product from 'shared/models/product.model'
import { RootState } from 'redux/store'
import { createSelector } from 'reselect'
import { CategoriesState } from '.'

export const selectCategoriesState = (state: RootState) => state.categories

export const selectCategoriesMap = createSelector(
	selectCategoriesState,
	(state: CategoriesState) =>
		state.categories.reduce((acc, curr) => {
			acc[curr.title.toLowerCase()] = curr.items
			return acc
		}, {} as { [key: string]: Product[] })
)

export const selectCategoriesIsLoading = createSelector(
	selectCategoriesState,
	state => state.isLoading
)

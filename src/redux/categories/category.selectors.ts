import { RootState } from 'redux/store'
import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer'

export const selectCategoriesState = (state: RootState) => state.categories

export const selectCategoriesMap = createSelector(
	selectCategoriesState,
	(state: CategoriesState) => state.categoriesMap
)

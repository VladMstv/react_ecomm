import ShopDataCategory from 'models/shop-data-category.model'
import { PayloadAction } from 'redux/utils/payload-action'

export type SetCategoriesAction = PayloadAction<
	'SET_CATEGORIES',
	ShopDataCategory[]
>

export type CategoryAction = SetCategoriesAction

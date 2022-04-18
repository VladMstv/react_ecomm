import Product from 'models/product.model'
import { PayloadAction } from 'redux/utils/payload-action'

export type SetCategoriesMapAction = PayloadAction<
	'SET_CATEGORIES_MAP',
	{ [key: string]: Product[] }
>

export type CategoryAction = SetCategoriesMapAction

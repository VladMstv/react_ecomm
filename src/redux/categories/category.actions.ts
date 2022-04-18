import Product from 'models/product.model'
import createAction from 'redux/utils/action-creator'
import { SetCategoriesMapAction } from '.'

const SetCategories = (categories: {
	[key: string]: Product[]
}): SetCategoriesMapAction => createAction('SET_CATEGORIES_MAP', categories)

export default SetCategories

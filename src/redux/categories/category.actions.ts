import ShopDataCategory from 'models/shop-data-category.model'
import createAction from 'redux/utils/action-creator'
import { SetCategoriesAction } from '.'

const SetCategories = (categories: ShopDataCategory[]): SetCategoriesAction =>
	createAction('SET_CATEGORIES', categories)

export default SetCategories

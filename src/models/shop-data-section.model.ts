import ShopDataItem from './shop-data-item.model'

export default interface ShopDataSection {
	id: number
	title: string
	routeName: string
	items: ShopDataItem[]
}

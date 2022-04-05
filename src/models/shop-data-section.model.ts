import Product from './product.model'

export default interface ShopDataSection {
	id: number
	title: string
	routeName: string
	items: Product[]
}

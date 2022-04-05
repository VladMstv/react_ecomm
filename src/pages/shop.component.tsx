import PreviewCollection from 'components/shop/preview-collection.component'
import ShopDataSection from 'models/shop-data-section.model'
import React from 'react'
import SHOP_DATA from 'shop.data'

interface ShopPageState {
	collections: ShopDataSection[]
}

export default class ShopPage extends React.Component<
	Record<string, never>,
	ShopPageState
> {
	constructor(props: Record<string, never>) {
		super(props)

		this.state = { collections: SHOP_DATA }
	}

	render() {
		const { collections } = this.state
		return (
			<div>
				{collections.map(({ id, title, items }) => (
					<PreviewCollection key={id} title={title} items={items} />
				))}
			</div>
		)
	}
}

import CategoryPreview from 'components/shop/category-preview.component'
import React, { useState } from 'react'
import SHOP_DATA from 'shop-data'

function CategoriesPreview() {
	const [collections] = useState(SHOP_DATA)

	return (
		<>
			{collections.map(({ title, items }) => (
				<CategoryPreview key={title} title={title} items={items} />
			))}
		</>
	)
}

export default CategoriesPreview

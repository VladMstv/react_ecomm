import CategoryPreview from 'components/shop/category-preview.component'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from 'redux/categories'

function CategoriesPreview() {
	const collections = useSelector(selectCategoriesMap)

	return (
		<>
			{Object.entries(collections).map(([title, items]) => (
				<CategoryPreview key={title} title={title} items={items} />
			))}
		</>
	)
}

export default CategoriesPreview

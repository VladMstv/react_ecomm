import LoadingSpinner from 'components/shared/loading-spinner/loading-spinner.component'
import CategoryPreview from 'components/shop/category-preview.component'
import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from 'redux/categories'

function CategoriesPreview(): JSX.Element {
	const collections = useSelector(selectCategoriesMap)
	const isLoading = useSelector(selectCategoriesIsLoading)

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<>
			{Object.entries(collections).map(([title, items]) => (
				<CategoryPreview key={title} title={title} items={items} />
			))}
		</>
	)
}

export default CategoriesPreview

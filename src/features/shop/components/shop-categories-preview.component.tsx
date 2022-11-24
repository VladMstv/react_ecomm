import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner.component'
import CategoryPreview from 'features/shop/components/category-preview/category-preview.component'
import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from 'features/shop/state/categories'

function ShopCategoriesPreview(): JSX.Element {
	const collections = useSelector(selectCategoriesMap)
	const isLoading = useSelector(selectCategoriesIsLoading)

	return (
		<div className='page'>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					{Object.entries(collections).map(([title, items]) => (
						<CategoryPreview key={title} title={title} items={items} />
					))}
				</>
			)}
		</div>
	)
}

export default ShopCategoriesPreview

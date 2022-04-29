import LoadingSpinner from 'components/shared/loading-spinner/loading-spinner.component'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from 'redux/categories'
import ProductCardComponent from './product-card.component'

function Category() {
	const { category } = useParams()
	const categoriesMap = useSelector(selectCategoriesMap)
	const isLoading = useSelector(selectCategoriesIsLoading)

	const currentCategoryItems = categoriesMap[category?.toLowerCase() || '']

	return (
		<>
			<h2 className='text-3xl font-semibold text-center w-full mb-10'>
				{category?.toUpperCase()}
			</h2>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className='category-container flex gap-5 justify-evenly md:justify-center flex-wrap'>
					{currentCategoryItems.map(product => {
						const { id } = product
						return <ProductCardComponent key={id} product={product} />
					})}
				</div>
			)}
		</>
	)
}

export default Category

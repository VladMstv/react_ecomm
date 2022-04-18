import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCategoriesMap } from 'redux/categories'
import ProductCardComponent from './product-card.component'

function Category() {
	const { category } = useParams()
	const categoriesMap = useSelector(selectCategoriesMap)

	const currentCategoryItems = categoriesMap[category?.toLowerCase() || '']

	console.log('render category')

	return (
		<>
			<h2 className='text-3xl font-semibold text-center w-full mb-5'>
				{category?.toUpperCase()}
			</h2>
			<div className='category-container flex gap-5 justify-evenly md:justify-start flex-wrap'>
				{currentCategoryItems.map(product => {
					const { id } = product
					return <ProductCardComponent key={id} product={product} />
				})}
			</div>
		</>
	)
}

export default Category

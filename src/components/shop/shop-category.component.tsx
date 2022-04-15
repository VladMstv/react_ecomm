import ShopDataCategory from 'models/shop-data-category.model'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SHOP_DATA from 'shop-data'
import ProductCardComponent from './product-card.component'

function findCategory(
	categories: ShopDataCategory[],
	categoryName: string
): ShopDataCategory | undefined {
	return categories.find(x => x.title.toLowerCase() === categoryName)
}

function Category() {
	const { category } = useParams()
	const categories = SHOP_DATA

	const [categoryItem, setCategoryItem] = useState(
		findCategory(categories, category!)!
	)

	useEffect(() => {
		const newCategory = findCategory(categories, category!)
		setCategoryItem(newCategory as ShopDataCategory)
	}, [category])

	const { items: products } = categoryItem
	return (
		<>
			<h2 className='text-3xl font-semibold text-center w-full mb-5'>{category?.toUpperCase()}</h2>
			<div className='category-container flex gap-5 justify-evenly md:justify-start flex-wrap'>
				{products.map(product => {
					const { id } = product
					return <ProductCardComponent key={id} product={product} />
				})}
			</div>
		</>
	)
}

export default Category

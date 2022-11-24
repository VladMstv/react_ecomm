import ShopCategory from 'features/shop/components/shop-category.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCategoriesStart, selectCategoriesMap } from 'features/shop/state/categories'
import ShopCategoriesPreview from '../features/shop/components/shop-categories-preview.component'

function ShopPage() {
	const dispatch = useDispatch()
	const categories = useSelector(selectCategoriesMap) 

	useEffect(() => {
		if (Object.keys(categories).length === 0) {
			dispatch(fetchCategoriesStart())
		}
	}, [categories])
	return (
		<Routes>
			<Route index element={<ShopCategoriesPreview />} />
			<Route path=':category' element={<ShopCategory />} />
		</Routes>
	)
}
export default ShopPage

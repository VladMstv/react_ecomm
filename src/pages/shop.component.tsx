import Category from 'components/shop/shop-category.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCategoriesStart, selectCategoriesMap } from 'redux/categories'
import CategoriesPreview from './categories-preview.component'

function ShopPage() {
	const dispatch = useDispatch()
	const categories = useSelector(selectCategoriesMap)

	useEffect(() => {
		if (Object.keys(categories).length === 0) {
			dispatch(fetchCategoriesStart())
		}
	}, [dispatch])
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}
export default ShopPage

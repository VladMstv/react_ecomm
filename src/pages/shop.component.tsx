import Category from 'components/shop/shop-category.component'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { FetchCategoriesAsync } from 'redux/categories'
import CategoriesPreview from './categories-preview.component'

function ShopPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(FetchCategoriesAsync())
	}, [])
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}
export default ShopPage

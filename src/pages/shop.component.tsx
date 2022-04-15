import Category from 'components/shop/shop-category.component'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from './categories-preview.component'

function ShopPage() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}
export default ShopPage

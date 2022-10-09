import 'App.css'
import Header from 'components/layout/header.component'
import Authentication from 'pages/authentication.component'
import Checkout from 'pages/checkout.component'
import HomePage from 'pages/homepage.component'
import ShopPage from 'pages/shop.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { checkUserSession } from 'redux/user'
import { selectCurrentUser } from 'redux/user/user.selectors'

export default function App() {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)

	useEffect(() => {
		dispatch(checkUserSession())
	}, [dispatch])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='shop/*' element={<ShopPage />} />
				<Route path='checkout' element={<Checkout />} />
				<Route
					path='sign-in'
					element={currentUser ? <Navigate to='/' replace /> : <Authentication />}
				/>
			</Routes>
		</>
	)
}

import 'App.css'
import Header from 'components/layout/header/header.component'
import { HeaderInitialPaddingTopRem } from 'components/layout/header/header.styles'
import Authentication from 'pages/authentication.component'
import Checkout from 'pages/checkout.component'
import HomePage from 'pages/homepage.component'
import ShopPage from 'pages/shop.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { checkUserSession } from 'redux/user'
import { selectCurrentUser } from 'redux/user/user.selectors'
import styled from 'styled-components'
import useIsScrollTopMoreThanHeaderPadding from 'utils/hooks/use-scroll-top-more-than-header-padding.hook'


const AppWrapper = styled.div<{ topPadding: string }>`
	${({ topPadding }) => ({
		paddingTop: topPadding,
	})}
`

export default function App() {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)

	useEffect(() => {
		dispatch(checkUserSession())
	}, [dispatch])

	const isScrollTopMoreThanHeaderPadding = useIsScrollTopMoreThanHeaderPadding()

	return (
		<AppWrapper
			topPadding={
				isScrollTopMoreThanHeaderPadding ? `${HeaderInitialPaddingTopRem}rem` : '0'
			}
		>
			<Header isSticky={isScrollTopMoreThanHeaderPadding} />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='shop/*' element={<ShopPage />} />
				<Route path='checkout' element={<Checkout />} />
				<Route
					path='sign-in'
					element={currentUser ? <Navigate to='/' replace /> : <Authentication />}
				/>
			</Routes>
		</AppWrapper>
	)
}

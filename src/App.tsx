import { checkUserSession } from 'features/authentication/state/user'
import { selectCurrentUser } from 'features/authentication/state/user/user.selectors'
import Header, {
	HeaderInitialPaddingTopRem
} from 'layout/header/header.component'
import Authentication from 'pages/authentication.page'
import Checkout from 'pages/checkout.page'
import HomePage from 'pages/homepage.page'
import ShopPage from 'pages/shop.page'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import useIsScrollTopMoreThanHeaderPadding from 'shared/hooks/use-scroll-top-more-than-header-padding.hook'
import styled from 'styled-components'

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

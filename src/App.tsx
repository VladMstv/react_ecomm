import 'App.css'
import Header from 'components/layout/header.component'
import Authentication from 'pages/authentication.component'
import Checkout from 'pages/checkout.component'
import HomePage from 'pages/homepage.component'
import ShopPage from 'pages/shop.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { setUser } from 'redux/user/user.actions'
import { selectCurrentUser } from 'redux/user/user.selectors'
import {
	ObserveUserAuthStateChange,
	signOut,
} from 'utils/firebase/firebase.util'
import './styles.css'

export default function App() {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)

	useEffect(() => {
		const unsubscriberFromStateChange = ObserveUserAuthStateChange(user =>
			dispatch(setUser(user))
		)
		return unsubscriberFromStateChange
	}, [dispatch])

	return (
		<div>
			<Header handleSignOut={signOut} />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='shop/*' element={<ShopPage />} />
				<Route path='checkout' element={<Checkout />} />
				<Route
					path='sign-in'
					element={currentUser ? <Navigate to='/' replace /> : <Authentication />}
				/>
			</Routes>
		</div>
	)
}

// old class component approach

// type DispatchProps = {
// 	setCurrentUser: typeof setUser
// }
// interface StateProps {
// 	currentUser: UserState['currentUser']
// }

// type Props = DispatchProps & StateProps

// const mapStateToProps: MapStateToProps<
// 	StateProps,
// 	Record<string, never>,
// 	RootState
// > = createStructuredSelector({ currentUser: selectCurrentUser })

// const mapDispatchProps: MapDispatchToProps<
// 	DispatchProps,
// 	Record<string, never>
// > = dispatch => ({
// 	setCurrentUser: user => dispatch(setUser(user)),
// })
// class App extends React.Component<Props> {
// 	unsubscriberFromStateChange!: Unsubscribe

// 	componentDidMount() {
// 		const { setCurrentUser } = this.props
// 		this.unsubscriberFromStateChange = ObserveUserAuthStateChange(setCurrentUser)
// 	}

// 	componentWillUnmount() {
// 		this.unsubscriberFromStateChange()
// 	}

// 	render() {
// 		const { currentUser } = this.props
// 		console.log('render app')
// 		return (
// 			<div>
// 				<Header handleSignOut={signOut} />
// 				<Routes>
// 					<Route path='/' element={<HomePage />} />
// 					<Route path='shop/*' element={<ShopPage />} />
// 					<Route
// 						path='sign-in'
// 						element={currentUser ? <Navigate to='/' replace /> : <Authentication />}
// 					/>
// 				</Routes>
// 			</div>
// 		)
// 	}
// }

// export default connect(mapStateToProps, mapDispatchProps)(App)

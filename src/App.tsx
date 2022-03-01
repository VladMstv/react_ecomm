import 'App.css'
import Header from 'components/header.component'
import { Unsubscribe } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import AppUser from 'models/user.model'
import HomePage from 'pages/homepage.component'
import ShopPage from 'pages/shop.component'
import SignInUpPage from 'pages/sign-in-up.component'
import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { RootState } from 'redux/store'
import { setUser } from 'redux/user/user.actions'
import { UserState } from 'redux/user/user.reducer'
import FirebaseUtil from 'utils/firebase.util'
import './styles.css'

type DispatchProps = {
	setCurrentUser: typeof setUser
}

interface StateProps {
	currentUser: UserState['currentUser']
}

type Props = DispatchProps & StateProps

const mapStateToProps: MapStateToProps<
	StateProps,
	Record<string, never>,
	RootState
> = state => ({ currentUser: state.user.currentUser })

const mapDispatchProps: MapDispatchToProps<
	DispatchProps,
	Record<string, never>
> = dispatch => ({
	setCurrentUser: user => dispatch(setUser(user)),
})

class App extends React.Component<Props> {
	unsubscriberFromStateChange!: Unsubscribe

	componentDidMount() {
		const { setCurrentUser } = this.props
		this.unsubscriberFromStateChange = FirebaseUtil.auth.onAuthStateChanged(
			async user => {
				if (user) {
					const userRef = await FirebaseUtil.CreateUserProfileDocument(user)
					onSnapshot(userRef, {
						next: snapshot => {
							setCurrentUser({
								id: snapshot.id,
								...(snapshot.data() as Omit<AppUser, 'id'>),
							})
						},
					})
				} else {
					setCurrentUser(null)
				}
			}
		)
	}

	componentWillUnmount() {
		this.unsubscriberFromStateChange()
	}

	render() {
		const { currentUser } = this.props
		return (
			<div>
				<Header handleSignOut={() => FirebaseUtil.SignOut()} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route
						exact
						path='/sign-in'
						render={() => (currentUser ? <Redirect to='/' /> : <SignInUpPage />)}
					/>
				</Switch>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchProps)(App)

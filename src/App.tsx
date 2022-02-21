import React from 'react'
import 'App.css'
import HomePage from 'pages/homepage.component'
import ShopPage from 'pages/shop.component'

import './styles.css'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/header.component'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	)
}

export default App

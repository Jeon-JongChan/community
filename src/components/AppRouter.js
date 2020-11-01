import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Auth from 'routes/Auth'
import Temp from 'routes/Temp'
import Profile from 'routes/Profile'
import Main from 'routes/Main'
import Navigation from 'components/Navigation'

const AppRouter = ({isLoggedIn}) => {
	return (
		<Router>
			{ isLoggedIn && <Navigation /> }
			<Switch>
				{isLoggedIn ? (
				<>
					<Route exact path="/">
						{/*<Temp/>*/}
						<Main/>
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Redirect from="*" to="/" />
				</>
					
				) : (
				<>
					<Route exact path="/">
						<Auth/>
					</Route>
					<Redirect from="*" to="/" />
				</>
				)
				}
			</Switch>
		</Router>
	);
}

export default AppRouter
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Auth from 'routes/Auth'
import Profile from 'routes/Profile'
import Index from 'routes/Index'
import Navigation from 'components/Navigation'

const AppRouter = ({isLoggedIn}) => {
	return (
		<Router>
			<Switch>
				<>
					<Navigation/>
					<Route exact path="/">
						<Index/>
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Redirect from="*" to="/" />
				</>
			</Switch>
		</Router>
	);
}

export default AppRouter
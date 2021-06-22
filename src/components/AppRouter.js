import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Index from 'routes/Index'
import FreeBoard from 'routes/FreeBoard'
import Navigation from 'components/Navigation'

const AppRouter = ({isLogin}) => {
	return (
		<Router>
			<Switch>
				<div id="master">
				<Route path={"/"} render={(props) => {
					if(props.match.isExact) {
						return (
							<Navigation 
								margin={'0 0 0 200px'}
								width='1520px'
							/> 
						)
					} else {
						return (
							<Navigation /> 
						)
					}
				}}/>
				
					<Route exact path="/FreeBoard">
						<FreeBoard/>
					</Route>
					<Redirect from="*" to="/" />
					<Route exact path="/">
						<Index 
							isLogin={isLogin}
							padding="0 200px"
						/>
					</Route>
				</div>
			</Switch>
		</Router>
	);
}

export default AppRouter
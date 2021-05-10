import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Index from 'routes/Index'
import FreeBoard from 'routes/FreeBoard'
import Navigation from 'components/Navigation'

const AppRouter = ({isLogin}) => {
	const [index, setIndex] = useState(false);
	return (
		<Router>
			<Switch>
				<div id="master">
					{index?(
						
					) : (
						<Navigation/>
					)}
					<Route exact path="/">
						<Index 
							isLogin={isLogin}
							padding="0 200px"
						/>
					</Route>
					<Route exact path="/FreeBoard">
						<FreeBoard/>
					</Route>
					<Redirect from="*" to="/" />
				</div>
			</Switch>
		</Router>
	);
}

export default AppRouter
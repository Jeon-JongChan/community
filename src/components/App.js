import React, { useState, useEffect } from 'react';
import AppRouter from 'components/AppRouter';
import { authService, userService } from 'fbase';
import debug from "debug.js";

function App() {
	const [init, setInit] = useState(false);
	const [isLogin, setLogin] = useState(false);
	if(!init) {
		authService.signOut();
		setInit(true);
	}
	useEffect(()=> {
		authService.auth.onAuthStateChanged((user)=>{
			if(user) { 
				userService.user = user;
				setLogin(true); 
			}
			else {
				setLogin(false);
			}
		})
	})
  	return (
    	<>
		<AppRouter isLogin={isLogin}/>
		</>
	);
}

export default App;
//{init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
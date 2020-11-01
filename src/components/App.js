import React, { useState, useEffect } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fbase';

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setLogin] = useState(false);
	
	useEffect(()=> {
		authService.onAuthStateChanged((user)=>{
			if (user){
				setLogin(true);
			} else {
				setLogin(false);
			}
			setInit(true);
		})
	})
  	return (
    	<>
		
		{init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
		<footer>&copy; Community {new Date().getFullYear()}</footer>
    	
		</>
	);
}

export default App;

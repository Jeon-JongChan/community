import React, {useState} from "react";
import firebase, {authService} from "fbase"

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNetAccount] = useState(true);
	const [error, setError] = useState("");
	const onChange = (event) => {
		const {target:{name, value}} = event;
		console.log(event);
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") { 
			setPassword(value);
		}
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			let data
			if(newAccount){
				data = await authService.createUserWithEmailAndPassword(email, password)
			} else {
				data = await authService.signInWithEmailAndPassword(email, password)
			}
			console.log(data);
		} catch(error) {
			console.log(error.message);
			setError(error.message);
		}
	};
	const toggleAccount = () => {
		setNetAccount((prev) => !prev);
	}
	const onSocialClick = async (event) => {
		try {
			const { target: {name}, } = event
			let provider;
			if(name === "google") {
				provider = new firebase.auth.GoogleAuthProvider();
			} else if (name=="github") {
				provider = new firebase.auth.GithubAuthProvider();
			}
			const data = await authService.signInWithPopup(provider);
			console.log(data);
		} catch(error)
		{
			console.log(error.message)
		}

	}
	return (
	<div>
		<form onSubmit={onSubmit}>
			<input name="email" type="text" placeholder="Email or ID" required value={email}
				onChange={onChange}
			/>
			<input name="password" type="password" placeholder="password" required value={password}
				onChange={onChange}	
			/>
			<input type="submit" value={newAccount ? "Create Account" : "Log In"} />{error}
		</form>
		<span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create New Acount"}</span>
		<div>
			<button name="google" onClick={onSocialClick}>Continue with Google</button>
			<button name="github" onClick={onSocialClick}>Continue with Github</button>
		</div>
	</div>
)}
export default Auth;
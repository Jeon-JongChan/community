import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import firebase, {authService} from "fbase"
import "css/Slider.scss";
import "css/public.scss";

const LoginBox = (props) => {
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
		} catch(e) {
			console.log(e.message);
			setError(e.message);
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
			} else if (name === "github") {
				provider = new firebase.auth.GithubAuthProvider();
			}
			const data = await authService.signInWithPopup(provider);
			console.log(data);
		} catch(error)
		{
			console.log(error.message)
		}

	}
	const css = {
        container : {
			margin : props.margin,
			width : props.wh[0],
			height : props.wh[1]
		}
    }
    return (
        <>
        <div id="login-container" style={css.container}>
			<form onSubmit={onSubmit}>
				<div className="login">
					<div className="login-input">
						<input name="email" type="text" placeholder="ID" required value={email}
							onChange={onChange}
						/>
						<input name="password" type="password" placeholder="PW" required value={password}
							onChange={onChange}	
						/>
					</div>
					<div className="login-button">
						<input type="submit" value="로그인"/>
					</div>
				</div>
				
				<div className="login-sub-buttons">
					<Link to="/">회원가입</Link>
					<Link to="/">아이디</Link>
				</div>
			</form>
		</div>
        </>
    )
}
LoginBox.defaultProps = {
	margin : '0 0 0 0',
	wh: [465,215]
}
export default LoginBox;

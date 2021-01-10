import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import firebase, {authService} from "fbase"
import "css/Slider.scss";
import "css/public.scss";
import debug from "debug.js";

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
	const css = {
        container_margin : {
			margin : props.margin
		}
    }
    return (
        <>
        <div id="login-container" style={css.container_margin}>
            <div className="login-article">
                <p>
					마음의 평화와 사랑과 힌은<br/>
					위대한 리오쿠테르의 선물이다.
				</p>
				<span>모노라 속담</span>
            </div>
			<form onSubmit={onSubmit}>
				<div className="login">
					<div className="login-input">
						<input name="email" type="text" placeholder="Email or ID" required value={email}
							onChange={onChange}
						/>
						<input name="password" type="password" placeholder="password" required value={password}
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
    margin : '0 0 0 0'
}
export default LoginBox;

import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import firebase, {authService, userService} from "fbase"
import "css/Slider.scss";
import "css/public.scss";
import debug from "debug.js"

const LoginBox = (props) => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(false);
	const [profile_name, setProfileName] = useState("");
	const [error, setError] = useState("");
	useEffect (() => {
		setLogin(props.isLogin);
	})
	const onChange = (event) => {
		event.preventDefault();
		const {target:{name, value}} = event;
		if (name === "email") { setEmail(value); } 
		else if (name === "password") { setPassword(value); }
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		let data;
		try {
			data = await authService.signInWithEmail(email, password);
			if(data) {
				setProfileName(data.user.displayName)
			}
		} catch(e) {
			console.log(e.message);
			setError(e.message);
		}
	};
	const logout = (event) => {
		event.preventDefault();
		//debug("loginbox login : ",login);
		if(login) {
			authService.signOut();
		};
	}
	const onSocialClick = (event) => {
		try {
			const { target: {name}, } = event
			let provider;
			if(name === "google") {
				provider = new firebase.auth.GoogleAuthProvider();
			} else if (name === "github") {
				provider = new firebase.auth.GithubAuthProvider();
			}
			const data = authService.signInWithPopup(provider);
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
					{login ? (
						<>
						<span className="login-line">1학년 1반 10번</span>
						<span className="login-line">{profile_name}</span>
						</>
					) : (
						<>
						<input name="email" type="text" className="login-line" 
							placeholder="아이디" required value={email} onChange={onChange}
						/>
						<input name="password" type="password" className="login-line" 
							placeholder="비밀번호" required value={password} onChange={onChange}	
						/>
						</>
					)}
					</div>
					<div className="login-button">
						{login ? (
							<>
							<input type="button" value="Logout" onClick={logout}/>
							</>
						) : (
							<>
							<input type="submit" value="ENTER"/>
							</>
						)}
						
					</div>
				</div>
				
				<div className="login-sub-buttons">
					{login ? (
						<>
						<Link className="sub-first" to="/">프로필</Link>
						<span> | </span>
						<Link className="sub-two" to="/">쪽지</Link>
						</>
					) : (
						<>
						<Link className="sub-first">회원가입</Link>
						<span> | </span>
						<Link className="sub-two" to="/">아이디/비밀번호 찾기</Link>
						</>
					)}

				</div>
			</form>
		</div>
        </>
    )
}
LoginBox.defaultProps = {
	margin : '0 0 0 0',
	wh: [465,180]
}
export default LoginBox;

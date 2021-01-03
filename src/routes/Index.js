import React, {useState} from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "modules/BannerSlider";
import LoginBox from "modules/LoginBox";


const Auth = () => {
	
	return (
	<>
		<div className="container">
			<LoginBox
				margin={'0 20px 0 0'}
			/>
			<BannerSlider
				wh={['600px','auto']}
			/>
		</div>
	</>
)}
export default Auth;
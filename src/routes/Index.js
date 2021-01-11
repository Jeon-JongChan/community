import React, {useState} from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "components/BannerSlider";
import LoginBox from "components/LoginBox";
import ListBox from "components/ListBox";
import SliderBox from "components/SliderBox";


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
		<div className="container"> 
			<ListBox
				width=""
			/>
		</div>
		<div className="container"> 
			<SliderBox
			/>
		</div>
	</>
)}
export default Auth;
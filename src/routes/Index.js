import React from "react";
//import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "components/modules/BannerSlider";
import LoginBox from "components/modules/LoginBox";
import ListBox from "components/modules/ListBox";
import SliderBox from "components/modules/SliderBox";


const Auth = () => {
	
	return (
	<>
		<div className="container">
			<LoginBox
				margin={'0 20px 0 0'}
			/>
			<BannerSlider
				wh={[600,'auto']}
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
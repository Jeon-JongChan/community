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
		<div className="container">
			<div className="article-list">
				<div className="title">
					리스트 박스 타이틀
				</div>
				<ul className="list">
					<li className="litem">a</li>
					<li className="litem">b</li>
					<li className="litem">c</li>
				</ul>
			</div>
		</div>
	</>
)}
export default Auth;
import React, {useState} from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "components/BannerSlider";
import LoginBox from "components/LoginBox";
import ListBox from "components/ListBox";


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
			<div className="slider-box">
				<div className="title">
					슬라이더 박스 타이틀
				</div>
				<ul className="list">
					<li className="litem">
						<h2> 아이템 헤드입니다 </h2>
						<p>
							해당 아이템 본문입니다.<br/>
							여기다 텍스트를 적으면 됩니다.<br/>
						</p>
					</li>
					<li className="litem">
						<h2> 아이템 헤드입니다 </h2>
						<p>
							해당 아이템 본문입니다.<br/>
							여기다 텍스트를 적으면 됩니다.<br/>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</>
)}
export default Auth;
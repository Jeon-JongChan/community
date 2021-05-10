import React from "react";
//import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "components/modules/BannerSlider";
import LoginBox from "components/modules/LoginBox";
import ListBox from "components/modules/ListBox";
import SliderBox from "components/modules/SliderBox";


const Index = (props) => {
	const css = {
		tm_30 : {
			margin : '30px 0 0 0'
		},
		container : {
			padding : props.padding
		}
    }
	return (
	<>
		<div className="container" style={css.container}>
			<div className="container-main-left">
				<div className="login-top">
					<img src="/community/images/logo.png"/>
				</div>
				<LoginBox isLogin={props.isLogin} margin={'0 0 0 0'}/>
			</div>
			<div className="container-main-right">
				<BannerSlider wh={[1055,542]}/>
			</div>
		</div>
		<div className="container" style={Object.assign(css.tm_30,css.container)}>
			<div className="container-main-left">
				<div className="article-container article-box">
					<div className="article-list">
						<div className="title" style={{color:"white"}}>
							공지사항
						</div>
						<div className="list">
						</div>
					</div>
				</div>
			</div>
			<div className="container-main-right">
				<ListBox wh={[310,190]} margin='0 62px 0 0'/>
				<ListBox wh={[310,190]} margin='0 62px 0 0'/>
				<ListBox wh={[310,190]}/>
			</div>
		</div>
	</>
)}
export default Index;
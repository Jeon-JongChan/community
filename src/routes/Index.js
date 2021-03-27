import React from "react";
//import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import BannerSlider from "components/modules/BannerSlider";
import LoginBox from "components/modules/LoginBox";
import ListBox from "components/modules/ListBox";
import SliderBox from "components/modules/SliderBox";


const Auth = () => {
	const css = {
		tm_30 : {
			margin : '30px 0 0 0'
		}
    }
	return (
	<>
		<div className="container">
			<div className="container-main-left">
				<div className="login-top">

				</div>
				<LoginBox margin={'0 0 0 0'}/>
			</div>
			<div className="container-main-right">
				<BannerSlider wh={[1055,542]}/>
			</div>
		</div>
		<div className="container" style={css.tm_30}>
			<div className="container-main-left">
				<ListBox wh={['100%',190]} padding='0 62px 0 0'/>
			</div>
			<div className="container-main-right">
				<ListBox wh={[310,190]} margin='0 62px 0 0'/>
				<ListBox wh={[310,190]} margin='0 62px 0 0'/>
				<ListBox wh={[310,190]}/>
			</div>
		</div>
	</>
)}
export default Auth;
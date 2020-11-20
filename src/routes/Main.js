import React, { useState } from "react";
import "css/App.scss";
import "css/public.scss";
import slider from "js/slider.js";

const Main = ({isLoggedIn}) => {
	const container = {
		width: '120px'
	}
	console.log("slider",slider.move);
	return (
		<>
		<div className="container">
			<div>Container</div>
			<nav className="nav-menu">
				<ul className="menu">
					<li>
						<a href='#'>메뉴1</a>
						<ul className="sub-menu">
							<li>소메뉴1</li>
							<li>소메뉴1</li>
							<li>소메뉴1</li>
							<li>소메뉴1</li>
						</ul>
					</li>
					<li>
						<a href='#'>메뉴1</a>
						<ul className="sub-menu">
							<li>소메뉴1</li>
						</ul>
					</li>
					<li>
						<a href='#'>메뉴1</a>
						<ul className="sub-menu">
							<li>소메뉴1</li>
							<li>소메뉴1</li>
						</ul>
					</li>
					<li>
						<a href='#'>메뉴1</a>
						<ul className="sub-menu">
							<li>소메뉴1</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
		{/*banner*/}
		<div className="slider-container" data-slider-idx="1" data-slider-cnt="2">
			<button className="slider-back" onClick={slider.move(-1)}>뒤</button>
			<div className="slider">
				<ul data-idx="1">
					<li className="slider-img bg-black"></li>
					<li className="slider-img bg-red"></li>
				</ul>
			</div>
			<button className="slider-prev" onClick={slider.move(1)}>앞이다</button>
		</div>
		</>
	);
}

export default Main;
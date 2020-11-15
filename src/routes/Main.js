import React, { useState } from "react";
import "css/App.scss";
import "css/public.scss"

const Main = ({isLoggedIn}) => {
	const container = {
		width: '120px'
	}
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
			<button className="slider-prev">뒤</button>
			<div className="slider">
				<ul>
					<li className="slider-img bg-black"></li>
					<li className="slider-img bg-red"></li>
				</ul>
			</div>
			<button className="slider-prev">앞</button>
		</div>
		</>
	);
}

export default Main;
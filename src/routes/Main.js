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
		<div className="container">
			<div className="slider">
				<ul>
					<li>
						<div className="slider-img bg-black"></div>
					</li>
					<li>
						<div className="slider-img bg-red"></div>
					</li>
				</ul>
			</div>
			<button className="slider-prev">앞</button>
			<script>
			</script>
		</div>
		</>
	);
}

export default Main;
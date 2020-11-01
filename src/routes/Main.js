import React, { useState } from "react";
import "css/App.scss";

const Main = ({isLoggedIn}) => {
	const container = {
		width: '120px'
	}
	return (
		<>
		<div className="container">
			<div>Container</div>
			<nav>
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
		
		</>
	);
}

export default Main;
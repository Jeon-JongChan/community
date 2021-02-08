import React from "react"
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const Navigation = () => {
	return (
		<nav className="nav-menu">
			<div className="logo">
				<div className="logo-img bg-green" style={{width:'180px'}}></div>
			</div>
			<ul className="menu">
				<li>
					<Link to="/">Home</Link>
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
	)
}
export default Navigation;
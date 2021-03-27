import React from "react"
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const Navigation = () => {
	return (
		<nav className="nav-menu">
			<div className="logo">
				<img className="logo-img" src="/community/images/logo.png"/>
				<span className>미로고등학교 1-5</span>
			</div>
			<ul className="menu">
				<li>
					<Link to="/">세계관</Link>
					<ul className="sub-menu">
						<li>소메뉴1</li>
						<li>소메뉴1</li>
						<li>소메뉴1</li>
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>가이드라인</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>레시무르 광장</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>관계란</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>장터</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>QnA</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
						<li>소메뉴1</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
export default Navigation;
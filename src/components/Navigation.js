import React from "react"
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const Navigation = (props) => {
	const css = {
		nav : {

		}
	}
	return (
		<nav className="nav-menu">
			<div className="logo">
				<img className="logo-img" src="/community/images/logo.png"/>
				<span className="site-title">미로고등학교 1-5</span>
			</div>
			<ul className="menu">
				<li>
					<Link to="/">학교소개</Link>
					<ul className="sub-menu">
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
					<a href='#'>1학년 5반</a>
					<ul className="sub-menu">
						<li>현황판</li>
						<li><Link to="/FreeBoard">로드비란</Link></li>
					</ul>
				</li>
				<li>
					<a href='#'>도서관</a>
					<ul className="sub-menu">
						<li>소메뉴1</li>
					</ul>
				</li>
				<li>
					<a href='#'>매점</a>
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
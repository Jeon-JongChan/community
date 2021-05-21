import React from "react";
//import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";


const Index = (props) => {
	const css = {
		tm_30 : {
			margin : '30px 0 0 0'
		}
    }
	return (
	<>
		<div className="container">
			<section className="board">
				<div className="board-left">
					<div className="board-img-frame">
						<img className="board-img" src="/community/images/logo.png"/>
					</div>
				</div>
				<div className="board-right">
					<div className="main-text">
						<p>
							보드 테스트 이미지입니다. 
							이미지테스트 이미지테스트 이미지테스트 이미지 테스트 이미지 테스트
							이미지테스트 이미지테스트 이미지테스트 테스트테스트
							섬바뤼 테스트
						</p>
					</div>
					<div className="board-button">
						<button className="board-modify">수정</button>
						<button className="board-delete">삭제</button>
					</div>
				</div>
			</section>
		</div>
	</>
)}
export default Index;
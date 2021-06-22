import React from "react";
//import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import {textManager} from "js/public.js" 


const ImageBoard = (props) => {
	const css = {
    }
	return (
	<>
		<section className="image-board">
				<div className="board-left">
					<div className="board-img-frame">
						<img className="board-img" src="/community/images/logo.png"/>
					</div>
				</div>
				<div className="board-right">
					<div className="main-text">
						<p className="more-text text-ellipse" data-hidden='true'>
							{props.text}
						</p>
						<button className="more" onClick={textManager.more}>more...</button>
					</div>
					<div className="board-buttons">
						<button className="board-button board-modify">수정</button>
						<button className="board-button board-delete">삭제</button>
					</div>
				</div>
		</section>
	</>
)}

export default ImageBoard;
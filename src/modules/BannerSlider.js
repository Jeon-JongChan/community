import React, { useState } from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider.js";

const BannerSlider = () => {
    const slider_move = (dir) => {
		slider.click(dir);
    }
    return (
        <>
        <div className="slider-container">
			<button className="slider-back" onClick={()=>slider_move(-1)}>뒤</button>
			<div className="slider">
				<ul data-idx="1" data-cnt="3">
					<li className="slider-img bg-black"></li>
					<li className="slider-img bg-red"></li>
					<li className="slider-img bg-green"></li>
				</ul>
			</div>
			<button className="slider-prev" onClick={()=>slider_move(1)}>앞이다</button>
		</div>
        </>
    );
}

export default BannerSlider;
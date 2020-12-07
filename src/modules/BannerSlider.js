import React, {
    useState, useEffect
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider.js";
import debug from "debug.js";

const BannerSlider = (props) => {
    let slider_cnt = props.images.length;
    useEffect(()=>{
        slider.auto("slider-"+props.id);
    });
    const css = {
        slider: {
            width:props.wh[0]+'px',
            height:props.wh[1]+'px'
        },
        ul: {
            width: (props.wh[0]*(slider_cnt >=2?slider_cnt+1:slider_cnt))+'px'
        }
    }
    const slider_move = (e,dir) => {
        let dom = e.target.parentNode
        slider.click(dom,dir);
    }
    const initSlider = () => {
        let slider_item = [];
        debug("start init");
        let idx
        for(idx=0 ; idx < slider_cnt; idx++){
            slider_item.push(
                <li className={"slider-img "+props.images[idx]} 
                    data-order={idx+1} key={idx}>
                </li>
            )
        }
        // 마지막에 fake를 붙여서 연속된 슬라이더를 만든다.
        if(props.images.length >= 2){
            slider_item.push(
                <li className={"slider-img "+props.images[0]} 
                    data-order="0" key={idx}>
                </li>
            )
        }
        return slider_item;
    }
    return ( 
        <>
        <div id={"slider-"+props.id}className="slider-container" >
            <button className="slider-back" onClick={(e) => slider_move(e,-1)} > 뒤 </button> 
            <div className="slider" style={css.slider}>
                <ul className="slider-ani" style={css.ul} data-idx="1" data-cnt={(slider_cnt >=2?slider_cnt+1:slider_cnt)}>
                    {initSlider()}
                </ul> 
            </div> 
            <button className="slider-prev" onClick = {(e) => slider_move(e,1)}>앞이다</button> 
        </div> 
        </>
    );
}
BannerSlider.defaultProps = {
    images: ["bg-black","bg-green","bg-red"],
    wh: [600,480],
    id:1
}
export default BannerSlider;
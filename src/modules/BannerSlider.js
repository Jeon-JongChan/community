import React, {
    useState
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider.js";
import debug from "debug.js";

const BannerSlider = (props) => {
    let slider_cnt = props.images.length;
    console.log(slider_cnt);
    const css = {
        slider: {
            width:props.wh[0]+'px',
            height:props.wh[1]+'px'
        },
        ul: {
            width: (props.wh[0]*slider_cnt)+'px'
        }

    }
    const slider_move = (e,dir) => {
        let dom = e.target.parentNode
        slider.click(dom,dir);
    }
    const initSlider = () => {
        let slider_item = [];
        debug("start init");
        for(var i=0 ; i < slider_cnt; i++){
            slider_item.push(
            <li className={"slider-img "+props.images[i]} 
                data-order={i} key={i}>
            </li>)
            debug(i,slider_item[0]);
        }
        return slider_item;
    }
    return ( 
        <>
        <div id={"slider-"+props.id}className="slider-container" >
            <button className="slider-back" onClick={(e) => slider_move(e,-1)} > 뒤 </button> 
            <div className="slider" style={css.slider}>
                <ul className="slider-ani" style={css.ul} data-idx="1" data-cnt={slider_cnt}>
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
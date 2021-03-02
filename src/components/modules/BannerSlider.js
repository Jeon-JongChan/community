import React, {
    useEffect
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider"
import debug from "debug.js";

const BannerSlider = (props) => {
    let slider_cnt = (props.images.length > 1 ? props.images.length+1 : props.images.length);
    let slider_w = props.wh[0] - (props.btnwh[0]*2);
    useEffect(()=>{
        slider.auto("#slider-"+props.id+" ul");
    });
    const css = {
        slider_container: {
            width:props.wh[0],
            height:props.wh[1]
        },
        slider: {
            width:slider_w,
            height:props.wh[1]
        },
        btn: {
            width:props.btnwh[0]
        },
        ul: {
            width: slider_w*slider_cnt
        },
        li: {
            width:slider_w
        }
    }
    const initSlider = (slider_cnt, images) => {
        let slider_item = [];
        debug("start init");
        let idx
        for(idx=0 ; idx < props.images.length; idx++){
            slider_item.push(
                <li className={"slider-img "+images[idx]} 
                    data-order={idx+1} key={idx}>
                </li>
            )
        }
        // 마지막에 fake를 붙여서 연속된 슬라이더를 만든다.
        if(images.length >= 2){
            slider_item.push(
                <li className={"slider-img "+images[0]} 
                    data-order="0" key={idx}>
                </li>
            )
        }
        return slider_item;
    }
    const sliderBtn = (event, dir) => {
        let frame_tag = '.slider ul';
        slider.sliderMove(event,dir,frame_tag);
    }
    
    return ( 
        <>
        <div id={"slider-"+props.id}className="slider-container" style={css.slider_container}>
            <button className="slider-btn slider-back" 
                onClick={(e) => sliderBtn(e,-1)} style={css.btn}> 
                뒤 
            </button> 
            <div className="slider" style={css.slider}>
                <ul className="slider-ani" style={css.ul} data-idx="1" data-cnt={slider_cnt}>
                    {initSlider(slider_cnt, props.images)}
                </ul> 
            </div> 
            <button className="slider-btn slider-prev" 
                onClick = {(e) => sliderBtn(e,1)} style={css.btn}>
                앞
            </button> 
        </div> 
        </>
    );
}

BannerSlider.defaultProps = {
    images: ["bg-black","bg-green","bg-red"],
    wh: [600,150],
    btnwh: [30,0],
    id:1
}

export default BannerSlider;
import React, {
    useEffect
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider"
import debug from "debug.js";

const SliderBox = (props) => {
    let slider_cnt = (props.list.length > 1 ? props.list.length+1 : props.list.length);
    const css = {
        slider: {
            width:props.wh[0],
            height:props.wh[1]
        },
        ul: {
            width: props.wh[0]*slider_cnt
        },
        li: {
            width:props.wh[0]
        }
    }
    const initSlider = (slider_cnt, list) => {
        let slider_item = [];
        debug("start init");
        let idx;
        for(idx=0 ; idx < props.list.length; idx++){
            slider_item.push(
                <li className="litem" style={css.li} data-order={idx+1} key={idx}>
                    <h2> {list[idx][0]} </h2>
                    <p>
                        {
                            list[idx][1].split('\n').map((line, idx) => {
                                return (<span key={idx}>{line}<br/></span>)
                            })
                        }
                    </p>
                </li>
            )
        }
        // 마지막에 fake를 붙여서 연속된 슬라이더를 만든다.
        if(list.length >= 2){
            slider_item.push(
                <li className="litem" style={css.li} data-order={0} key={idx}>
                    <h2> {list[0][0]} </h2>
                    <p>
                        {
                            list[0][1].split('\n').map((line, idx) => {
                                return (<span key={idx}>{line}<br/></span>)
                            })
                        }
                    </p>
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
        <div id={"sliderbox-"+props.id}className="sliderbox-container" >
            <button className="slider-back" onClick={(e) => sliderBtn(e,-1)} > 뒤 </button> 
            <div className="slider" style={css.slider}>
                <ul className="slider-ani" style={css.ul} data-idx="1" data-cnt={slider_cnt}>
                    {initSlider(slider_cnt, props.list)}
                </ul> 
            </div> 
            <button className="slider-prev" onClick = {(e) => sliderBtn(e,1)}>앞이다</button> 
        </div> 
        </>
    );
}

SliderBox.defaultProps = {
    list : [["아이템 헤드입니다","해당 아이템 본문입니다.\n여기다 텍스트를 적으면 됩니다.\n"]
            ,["아이템 헤드입니다2","해당 아이템 본문입니다.\n 여기다 텍스트를 적으면 됩니다.\n"]
    ],
    wh : [240, 180],
    margin : '0 0 0 0'
}
export default SliderBox;
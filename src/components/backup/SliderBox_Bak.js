import React from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";
import slider from "js/slider.js"

const SliderBox = (props) => {
    const css = {
        slider_box : {
            margin : props.margin
        },
        list : {
            width : props.wh[0],
            height : props.wh[1],
        }
    }
    const makeItem = (list) => {
        return (
            list.map((element, idx)=>{
                return (
                    <div className="litem" data-idx={idx} key={idx}>
                        <h2> {element[0]} </h2>
                        <p>
                            {
                                element[1].split('\n').map((line, idx) => {
                                    return (<span key={idx}>{line}<br/></span>)
                                })
                            }
                        </p>
                    </div>
                )
            })
        )
    }

    return (
        <>
        <div className="slider-box" style={css.slider_box}>
            <div className="title">
                슬라이더 박스 타이틀
            </div>
            <div className="list" style={css.list}>
                <button className="slider-back" onClick={(e) => slider.sliderMove(e,-1,".slider ul")} > 뒤 </button> 
                <div className="lframe">
                    {makeItem(props.list)}
                </div>
                <button className="slider-prev" onClick = {(e) => slider.sliderMove(e,1,".slider ul")}>앞</button> 
            </div>
		</div>
        </>
    )
}

SliderBox.defaultProps = {
    list : [["아이템 헤드입니다","해당 아이템 본문입니다.\n여기다 텍스트를 적으면 됩니다.\n"]
            ,["아이템 헤드입니다2","해당 아이템 본문입니다.\n 여기다 텍스트를 적으면 됩니다.\n"]
    ],
    wh : [240, 180],
    margin : '0 0 0 0'
}
export default SliderBox;
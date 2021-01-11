import React, {useState} from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const SliderBox = (props) => {
    const makeItem = (list) => {
        return (
            list.map((element, idx)=>{
                return (
                    <div className="litem" data-idx={idx}>
                        <h2> {element[0]} </h2>
                        <p>
                            {
                                element[1].split('\n').map(line => {
                                    return (<span>{line}<br/></span>)
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
        <div className="slider-box">
            <div className="title">
                슬라이더 박스 타이틀
            </div>
            <div className="list">
                <div className="lframe">
                    {makeItem(props.list)}
                    <div className="litem" data-idx='1'>
                        <h2> 아이템 헤드입니다 </h2>
                        <p>
                            해당 아이템 본문입니다.<br/>
                            여기다 텍스트를 적으면 됩니다.<br/>
                        </p>
                    </div>
                    <div className="litem">
                        <h2> 아이템 헤드입니다 </h2>
                        <p>
                            해당 아이템 본문입니다.<br/>
                            여기다 텍스트를 적으면 됩니다.<br/>
                        </p>
                    </div>
                </div>
            </div>
		</div>
        </>
    )
}

SliderBox.defaultProps = {
    list : [["아이템 헤드입니다","해당 아이템 본문입니다.\n여기다 텍스트를 적으면 됩니다.\n"]
            ,["아이템 헤드입니다2","해당 아이템 본문입니다.\n 여기다 텍스트를 적으면 됩니다.\n"]
    ],

}
export default SliderBox;
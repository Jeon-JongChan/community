import React, {
    useEffect, useState
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import slider from "js/slider";
import domManager from "js/public";
import debug from "debug.js";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//fa-caret-left
const BannerSlider = (props) => {
    const [init, setInit] = useState(false);
    let btnwh = sltype.btnwh[props.type-1];
    let slider_cnt = (props.images.length > 1 ? props.images.length+1 : props.images.length);
    let slider_w = sltype.slider_wh('w',props.type,props.wh,btnwh);
    let slider_h = sltype.slider_wh('h',props.type,props.wh,btnwh);

    useEffect(()=>{
        //slider.auto("#slider-"+props.id+" .slframe");
        if(!init){
            sltype.two.frame_ul = document.querySelector("#slider-"+props.id+" .sl-two");
            sltype.two.item_w = sltype.two.frame_w(props.id)/3;
            sltype.two.makeItem(props.text,3);
            sltype.two.initMove();
            sltype.two.initAppendDom(sltype.two.view_cnt);
            debug(sltype.two.frame_w(props.id),sltype.two.frame_ul," ",sltype.two.item_w);
            setInit(true);
        }
    });
    const css = {
        slider_container: {
            width:props.wh[0],
            height:props.wh[1],
            flexDirection: sltype.needColumn.includes(props.type) ? 'column' : 'row',
        },
        slider: {
            width:slider_w,
            height:slider_h
        },
        btn: {
            width:btnwh[0],
            height:btnwh[1],
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
        let idx
        for(idx=0 ; idx < props.images.length; idx++){
            slider_item.push(
                <li className={"slider-img "+images[idx]} data-order={idx+1} key={idx}>
                    <img></img>
                </li>
            )
        }
        // 마지막에 fake를 붙여서 연속된 슬라이더를 만든다.
        if(images.length >= 2){
            slider_item.push(
                <li className={"slider-img "+images[0]} data-order="0" key={idx}>

                </li>
            )
        }
        return slider_item;
    }
    const sliderBtn = (event, dir) => {
        let frame_tag = "#slider-"+props.id+" .slframe";
        //debug("friends very fun  "+frame_tag);
        slider.sliderMove(event,"#slider-"+props.id,dir,frame_tag);
        if(props.type == 2){
            let two_tag = "#slider-"+props.id+" .sl-two";
            let idx = sltype.two.frame_ul.dataset.idx;
            slider.swap(sltype.two.frame_ul,sltype.two.items,idx,sltype.two.view_cnt,dir);
        }
    
    }
    
    return ( 
        <>
        <div id={"slider-"+props.id}className="slider-container" style={css.slider_container}>
            <div className="slider" style={css.slider}>
                <ul className="slframe slider-ani" style={css.ul} data-idx="1" data-cnt={slider_cnt}>
                    {initSlider(slider_cnt, props.images)}
                </ul> 
            </div> 
            <div className="sltype-two" style={css.btn}>
                <button className="button-clear left" onClick={(e) => sliderBtn(e,-1)}>
                    <FontAwesomeIcon icon={faCaretLeft} color={'#e09879'} size={'4x'}/>
                </button>
                <div className="sltype-two-frame">
                    <ul className="sl-two slider-ani" data-idx="1" data-cnt={sltype.two.view_cnt+2} data-view-cnt={sltype.two.view_cnt}
                        style={{width: sltype.two.item_w * props.text.length}}>
                    </ul>
                </div>
                <button className="button-clear right" onClick={(e) => sliderBtn(e,1)}>
                    <FontAwesomeIcon icon={faCaretRight} color={'#e09879'} size={'4x'}/>
                </button>
            </div>
        </div> 
        </>
    );
}

BannerSlider.defaultProps = {
    images: ["bg-black","bg-green","bg-red","bg-green","bg-red","bg-green"],
    text: ["제1장 [루들의축제]","달려볼까요 신청기간!","로드비가 익숙하지 않아요","제2장 [미정]","제3장 [프렌즈]","제4장 [프렌즈최고]"],
    wh: [600,150],
    type: 2,
    id:1
}

const sltype = {
    //{sltype.one(-1,'test',sliderBtn,css.btn)}
    btnwh : [[30,0],[1055,80]],
    needColumn : [2], // 버튼배치를 수직으로 할 타입
    one : {
        makeButton :(dir, txt, func, css) => {
            let add_class = dir==-1 ? 'slider-back' : 'slider-prev';
            return (
                <button className={"sltype-one "+add_class}
                    onClick={(e) => func(e,dir)} style={css}> 
                {txt}
                </button> 
            )
        }
    },
    two : {
        frame_w : (id) => {
            let frame = document.querySelector("#slider-"+id+" .sltype-two-frame");
            return frame.offsetWidth;
        },
        frame_ul : null,
        item_w : 925,
        view_cnt : 3,
        items : [],
        makeItem : (texts) => {
            let css = {
                width: sltype.two.item_w+'px',
                color: '#e09879'
            }
            let properties = {
                "data-order" : 0,
            }
            debug("css :", css);
            for(var idx=0 ; idx < texts.length; idx++){
                properties["data-order"] = idx+1;
                properties["key"] = idx;
                var item = domManager.make("li");
                item = domManager.style(item,css);
                item = domManager.property(item,properties);
                item.innerText = texts[idx];
                sltype.two.items.push(item);
            }
            
            return sltype.two.items;
        },
        initAppendDom: (view_cnt) => {
            let len = sltype.two.items.length;
            for(var idx=(len-1); idx < len; idx++) {
                sltype.two.frame_ul.appendChild(sltype.two.items[idx]);
            }
            
            for(var idx=0 ; idx < view_cnt+1; idx++){
                sltype.two.frame_ul.appendChild(sltype.two.items[idx]);
            }
        },
        initMove: ()=>{
            let middle = parseInt(sltype.two.view_cnt/2+0.5)-1;
            if(sltype.two.frame_ul !== null) {
                slider.move(sltype.two.frame_ul,-sltype.two.item_w*middle);
            }
        }

    },
    slider_wh : (key,type,wh,btnwh) => {
        let ret = 0
        if(key === 'w') {
            if(type === 1) {
                ret = wh[0] - btnwh[0]*2;
            }
            else {
                ret = wh[0];
            }
        }
        else if(key === 'h') {
            if(type === 1) {
                ret = wh[1];
            }
            else if(type === 2) {
                ret = wh[1] - btnwh[1];
            }
        }
        return ret;
    }
}

export default BannerSlider;

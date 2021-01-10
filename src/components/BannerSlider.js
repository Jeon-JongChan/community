import React, {
    useState, useEffect
} from "react";
import "css/Slider.scss";
import "css/public.scss";
import debug from "debug.js";

const BannerSlider = (props) => {
    let slider_cnt = props.images.length;
    useEffect(()=>{
        slider.auto("slider-"+props.id);
    });
    const css = {
        slider: {
            width:props.wh[0],
            height:props.wh[1]
        },
        ul: {
            width: (props.wh[0]*(slider_cnt >=2?slider_cnt+1:slider_cnt))+'px'
        }
    }
    
    return ( 
        <>
        <div id={"slider-"+props.id}className="slider-container" >
            <button className="slider-back" onClick={(e) => slider.sliderMove(e,-1)} > 뒤 </button> 
            <div className="slider" style={css.slider}>
                <ul className="slider-ani" style={css.ul} data-idx="1" data-cnt={(slider_cnt >=2?slider_cnt+1:slider_cnt)}>
                    {slider.initSlider(slider_cnt, props.images)}
                </ul> 
            </div> 
            <button className="slider-prev" onClick = {(e) => slider.sliderMove(e,1)}>앞이다</button> 
        </div> 
        </>
    );
}

BannerSlider.defaultProps = {
    images: ["bg-black","bg-green","bg-red"],
    wh: ['600px','150px'],
    id:1
}
const slider = {
    sliderMove : (e,dir) => {
        let dom = e.target.parentNode
        slider.click(dom,dir);
    },
    initSlider : (slider_cnt, images) => {
        let slider_item = [];
        debug("start init");
        let idx
        for(idx=0 ; idx < slider_cnt; idx++){
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
    },
    autoInterval : null,
    move: async (ul,cnt,next) => {
        debug("slider move: cnt-"+cnt+" next-"+next);
        if(next <= cnt && next >= 0) {
            if(ul.style.transitionDuration == '0s') ul.style.transitionDuration = '';
            let left = (-1) * (ul.offsetWidth / cnt) * (next-1);
            //debug("slider_location :" + left+" / "+ul.style.left+" index "+next);
            ul.setAttribute("data-idx",next);
            ul.style.left = left+"px";
        }
        else {
            // 오른쪽 범위 바깥으로 이동할려 할 때
            if(cnt >= 2 && next > cnt) {
                let left = (-1) * (ul.offsetWidth / cnt) * (next-1);
                debug("slider_location :" + left+" / "+ul.style.left+" index "+next+" limit : "+(-1) * (ul.offsetWidth / cnt) * (cnt));
                ul.setAttribute("data-idx",next);
                ul.style.left = left+"px";

                
                if(await slider.returnMove(ul, ((-1) * (ul.offsetWidth / cnt) * (cnt)) )) {
                    debug("slider return init lot");
                }
            } // 왼쪽 범위 바깥으로 이동
            
        }
    },
    click: (dom,dir) => { 
        let ul = dom.querySelector(".slider ul");

        if(ul != null) {
            let dataset = { ...ul.dataset };
            let next = dataset.idx;
            if(dir == 1) {
                debug("right move");
                if(dataset.idx < dataset.cnt){
                    next = dataset.idx*1 + 1;
                    slider.move(ul,dataset.cnt,next);
                }
            }
            else if(dir == -1) {
                debug("left move");
                if(dataset.idx > 1){
                    next = dataset.idx*1 - 1;
                    slider.move(ul,dataset.cnt,next);
                }
            }
        }
    },
    auto :(slider_id) => {
        let ul = document.querySelector("#"+slider_id+" ul");
        slider.auto_interval = setInterval((ul)=>{
            if(ul != null) {
                let dataset = { ...ul.dataset };
                let next = dataset.idx*1 + 1;
                slider.move(ul,dataset.cnt,next);
            }
        },3000,ul)
    },
    stop : () => {
        clearInterval(slider.auto_interval);
    },
    returnMove : (ul, dest) => {
        return new Promise(function(resolve, reject) {
            console.log("HI IM PROMICE",ul.style.left.replace("px",""),(dest),(ul.style.left.replace("px","") <= dest+"px"));
            if(ul.style.left.replace("px","") <= dest){
                ul.style.transitionDuration = '0s';
                ul.style.left = "0"+"px";
                ul.setAttribute("data-idx", 1);
                resolve(true)
            }
        });
    }
}
export default BannerSlider;
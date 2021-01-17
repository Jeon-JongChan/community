import debug from "debug.js";

const slider = {
    sliderMove : (e,dir,tag) => {
        let dom = e.target.parentNode
        slider.click(dom,dir,tag);
    },
    
    auto_interval : null,
    auto_trigger : true,
    auto_trigger_timeout : null,
    /*
     * 슬라이더를 작동시키고 싶은 경우 필요한 dataset
     * cnt, idx
     */
    move: async (frame,cnt,next) => {
        debug("slider move: cnt-"+cnt+" next-"+next);
        let lastItemOff = (frame.offsetWidth / cnt) * (cnt-1);

        if(next <= cnt && next >= 0) {
            if(frame.style.transitionDuration === '0s') frame.style.transitionDuration = '';
            let left = (-1) * (frame.offsetWidth / cnt) * (next-1);
            //debug("slider_location :" + left+" / "+ul.style.left+" index "+next);
            frame.setAttribute("data-idx",next);
            frame.style.left = left+"px";
        }
        // 오른쪽 범위 바깥으로 이동할려 할 때
        if(cnt > 1 && next > cnt) {
            let left = (-1) * lastItemOff;
            debug("slider_location :" + left+" / "+frame.style.left+" index "+next+" limit : "+(-1) * lastItemOff);
            frame.setAttribute("data-idx",next);
            frame.style.left = left+'px';

            
            if( await slider.returnMove(frame, -1 * lastItemOff, cnt, 1) ) {
                debug("slider return init lot");
            }
        } // 왼쪽 범위 바깥으로 이동
        else if (cnt > 1 && next < 1) {
            let left = (-1) * lastItemOff;
            if( await slider.returnMove(frame, -1 * lastItemOff, cnt, 1) ) {
                debug("slider return init lot");
            }
        }
    },
    click: (dom,dir,f_tag) => {
        // auto를 1.5초간 일시정지 한다.
        slider.auto_trigger = false;
        if(slider.auto_trigger_timeout != null) clearTimeout(slider.auto_trigger_timeout);
        slider.auto_trigger_timeout = setTimeout(()=>{
            slider.auto_trigger = true;
        },1500);
        // sf = slider_frame
        let sf = dom.querySelector(f_tag);

        if(sf != null) {
            let dataset = { ...sf.dataset };
            let next = dataset.idx;
            if(dir === 1) {
                debug("right move");
                if(dataset.idx < dataset.cnt){
                    next = dataset.idx*1 + 1;
                    slider.move(sf,dataset.cnt,next);
                }
            }
            else if(dir === -1) {
                debug("left move");
                if(dataset.idx > 1){
                    next = dataset.idx*1 - 1;
                    slider.move(sf,dataset.cnt,next);
                }
            }
        }

    },
    auto :(slider_fid) => {
        // 움직일 frame의 태그를 입력
        let frame = document.querySelector(slider_fid);
        slider.auto_interval = setInterval((frame)=>{
            if(frame != null && slider.auto_trigger) {
                let dataset = { ...frame.dataset };
                let next = dataset.idx*1 + 1;
                slider.move(frame,dataset.cnt,next);
            }
        },3000,frame)
    },
    stop : () => {
        clearInterval(slider.auto_interval);
    },
    returnMove : (frame, dest, cnt, dir = 1) => {
        if (dir === 1) {
            return new Promise(function(resolve, reject) {
                //console.log("HI IM PROMICE",frame.style.left.replace("px",""),(dest),(frame.style.left.replace("px","") <= dest+"px"));
                if(frame.style.left.replace("px","") <= dest){
                    frame.style.transitionDuration = '0s';
                    frame.style.left = 0;
                    frame.setAttribute("data-idx", 1);
                    resolve(true)
                }
            });
        }
        else if (dir === -1) {
            return new Promise(function(resolve, reject) {
                if(frame.style.left.replace("px","") === 0){
                    frame.style.transitionDuration = '0s';
                    frame.style.left = dest;
                    frame.setAttribute("data-idx", cnt);
                    resolve(true)
                }
            });
        }
    }
}

export default slider;
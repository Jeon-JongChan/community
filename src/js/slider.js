import debug from "debug.js";

const slider = {
    sliderMove : (e,id,dir,tag) => {
        let dom = document.querySelector(id);
        slider.click(dom,dir,tag);
    },
    auto_interval : null,
    auto_trigger : true,
    auto_trigger_timeout : null,
    move: (frame, left, next=null, duration=null) => {
        if(frame === null || frame === undefined) {
            console.error("slider move : frame is null");
            return;
        }
        //debug("slider move : ",frame);
        if(duration !== null && frame.style.transitionDuration === '0s') frame.style.transitionDuration = '';
        if(next !== null) frame.setAttribute("data-idx",next);
        frame.style.left = left+"px";
    },
    swap: (frame, items, idx, view_cnt, dir) => {
        idx = Number(idx);
        let next = slider.swap_idx(idx, items.length, dir);
        let addidx = idx;
        for(var v = view_cnt; v > 0; v-=1){
            addidx = slider.swap_idx(addidx, items.length, dir);
        }
        addidx -= 1;
        let curr_lot = frame.style.left;
        let moving_dist = frame.firstChild.offsetWidth * (dir * -1);
        debug("swap move data",curr_lot,moving_dist);
        if(dir === -1){
            frame.removeChild(frame.lastChild);
            frame.insertBefore(items[addidx], frame.firstChild);
        }
        else if(dir === 1){
            frame.removeChild(frame.firstChild);
            frame.appendChild(items[addidx])
        }
        frame.setAttribute("data-idx",String(next));
    },
    swap_idx: (idx, len, dir) => {
        idx = idx + dir;
        if(idx < 1) idx = len;
        else if(idx > len) idx = 1

        return idx;
    },
    /*
     * 슬라이더를 작동시키고 싶은 경우 필요한 dataset
     * cnt, idx
     */
    translate: async (frame,cnt,next) => {
        //debug("slider move: cnt-"+cnt+" next-"+next);
        let lastItemOff = (frame.offsetWidth / cnt) * (cnt-1);

        if(next <= cnt && next >= 0) {
            let left = (-1) * (frame.offsetWidth / cnt) * (next-1);
            slider.move(frame, left, next, true);
        }
        // 오른쪽 범위 바깥으로 이동할려 할 때
        if(cnt > 1 && next > cnt) {
            let left = (-1) * lastItemOff;
            slider.move(frame, left, next);

            if( await slider.returnMove(frame, -1 * lastItemOff, cnt, 1) ) {
                slider.translate(frame,cnt,2);
            }
        } // 왼쪽 범위 바깥으로 이동
        else if (cnt > 1 && next < 1) {
            if( await slider.returnMove(frame, -1 * lastItemOff, cnt, -1) ) {
                slider.translate(frame,cnt,cnt-1);
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
                //debug("right move");
                next = dataset.idx*1 + 1;
                slider.translate(sf,dataset.cnt,next);
            }
            else if(dir === -1) {
                //debug("left move :",dataset.idx*1 - 1," dir:",dir);
                next = dataset.idx*1 - 1;
                slider.translate(sf,dataset.cnt,next);
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
                slider.translate(frame,dataset.cnt,next);
            }
        },3000,frame)
    },
    stop : () => {
        clearInterval(slider.auto_interval);
    },
    returnMove : (frame, dest, cnt, dir = 1) => {
        //debug("returnMove left : ",frame.style.left,frame.style.left.replace("px","")*1 > 0);
        if (dir === 1) {
            return new Promise(function(resolve, reject) {
                //console.log("HI IM PROMICE",frame.style.left.replace("px",""),(dest),(frame.style.left.replace("px","") <= dest+"px"));
                if(frame.style.left.replace("px","")*1 <= dest){
                    frame.style.transitionDuration = '0s';
                    frame.style.left = 0;
                    frame.setAttribute("data-idx", 1);
                    resolve(true);
                }
            });
        }
        else if (dir === -1) {
            return new Promise(function(resolve, reject) {
                if(frame.style.left.replace("px","")*1 > 0){
                    frame.style.transitionDuration = '0s';
                    frame.style.left = dest+"px";
                    frame.setAttribute("data-idx", cnt);
                    resolve(true);
                }
            });
        }
    }
}

export default slider;

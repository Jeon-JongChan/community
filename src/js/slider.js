import debug from "debug.js";
const slider = {
    auto_interval:null,
    move: (ul,cnt,next) => {
        debug("slider move: cnt-"+cnt+" next-"+next);
        if(next <= cnt && next >= 0) {
            let left = (-1) * (ul.offsetWidth / cnt) * (next-1);
            //debug("slider_location :" + left+" / "+ul.style.left+" index "+next);
            ul.setAttribute("data-idx",next);
            ul.style.left = left+"px";
        }
        else {
            if(cnt >= 2 && next > cnt) {
                
            }
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
}

export default slider

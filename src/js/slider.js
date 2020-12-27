import debug from "debug.js";
const slider = {
    auto_interval:null,
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

export default slider

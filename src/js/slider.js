import debug from "debug.js";
const slider = {
    move: (item,cnt,next) => {
        let left = (-1) * (item.offsetWidth / cnt) * (next-1);
        debug("slider_location :" + left+" / "+item.style.left+" index "+next);
        
        item.setAttribute("data-idx",next);
        item.style.left = left+"px";
    },
    click: (dir) => { 
        let item = document.querySelector(".slider ul");

        if(item != null) {
            let dataset = { ...item.dataset };
            let next = dataset.idx;
            if(dir == 1) {
                debug("right move");
                if(dataset.idx < dataset.cnt){
                    next = dataset.idx*1 + 1;
                    slider.move(item,dataset.cnt,next);
                }
            }
            else if(dir == -1) {
                debug("left move");
                if(dataset.idx > 1){
                    next = dataset.idx*1 - 1;
                    slider.move(item,dataset.cnt,next);
                }
            }
        }
    },
}

export default slider

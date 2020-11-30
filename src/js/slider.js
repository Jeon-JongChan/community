const slider = {
    move: (item,cnt,next) => {
        let left = (-1) * (item.offsetWidth / cnt) * (next-1);
        console.log("slider_location :" + left+" / "+item.style.left+" index "+next);
        
        item.setAttribute("data-idx",next);
        item.style.left = left+"px";
    },
    click: (dir) => { 
        let item = document.querySelector(".slider ul");

        if(item != null) {
            let dataset = { ...item.dataset };
            let next = dataset.idx;
            if(dir == 1) {
                console.log("right move");
                if(dataset.idx < dataset.cnt){
                    next = dataset.idx*1 + 1;
                    slider.move(item,dataset.cnt,next);
                }
            }
            else if(dir == -1) {
                console.log("left move");
                if(dataset.idx > 1){
                    next = dataset.idx*1 - 1;
                    slider.move(item,dataset.cnt,next);
                }
            }
<<<<<<< HEAD
=======
            left = (-1) * item.offsetWidth * index;
            console.log("slider_location :" + left+"/"+item.style.left+"index "+index);
            
            //item.setAttribute("data-idx",""+)
            //item.style.left = left+"px";
>>>>>>> b512808ae507e0244d643f04240d4b6e14e3d079
        }
        */
    },
}

export default slider
const slider_func = {
    move: () => { 
        let item = document.querySelector(".slider ul");
        let left = 0;
        if(item != null) {
            let index = item.dataset.idx;
            left = (-1) * item.offsetWidth * index;
            console.log("slider_location :" + left+"/"+item.style.left+"index "+index);
            
            item.style.left = left+"px";
        }
        
    },
}

export default slider_func

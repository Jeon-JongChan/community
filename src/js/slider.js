const slider_func = {
    move: (index) => { 
        let slider_item = document.querySelector(".slider ul");
        console.log(slider_item);
        let left = 0;
        if(slider_item != null) {
            left = (-1) * index * slider_item.offsetWidth;
            console.log("slider_location :" + left);
            slider_item.style.width = left;
        }
        
    },
}

export default slider_func

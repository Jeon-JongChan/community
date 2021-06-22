import debug from "debug.js";

const domManager = {
    make: (tag) => {
        let dom = document.createElement(tag);
        return dom;
    },
    style: (dom, styles) => {
        for(var v in styles){
            dom.style[v] = styles[v];
        }
        return dom;
    },
    property: (dom, properties) => {
        for(var v in properties) {
            dom.setAttribute(v,properties[v]);
        }
        return dom;
    }
};

const textManager = {
    lineConter: (target) => {
        let domHeight = target.offsetHeight;
        let lineHeight = parseInt(target.style.lineHeight);
        let lineCnt = domHeight / lineHeight;
        debug("line count : ",lineCnt);
    },
    more: (event) => {
        let textNode = event.currentTarget.parentNode.querySelector(".more-text");
        textManager.lineConter(textNode);
        if(textNode.dataset.hidden === "true") {
            textNode.dataset.hidden = "false";
            textNode.classList.replace("text-ellipse","text-no-ellipse");
        }
        else {
            textNode.dataset.hidden = "true";
            textNode.classList.replace("text-no-ellipse","text-ellipse");
        }
    }
}
export default domManager;
export {textManager};
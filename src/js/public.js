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

export default domManager;
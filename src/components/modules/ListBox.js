import React from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const ListBox = (props) => {
    let list_h = props.wh[1] / 6;
    const css = {
        container : {
            margin : props.margin,
            padding : props.padding,
            width : props.wh[0],
            height : props.wh[1]
        },
        list : {
            //height : (list_h * props.base_item_cnt)
            height : (props.wh[1] / 5) * 3 + (props.wh[1] / 10)
        },
        list_title : {
            height : props.wh[1] / 5,
            lineHeight: props.wh[1] / 5 + 'px',
            fontSize : props.wh[1] / 10,
        },
        list_item : {
            height: list_h,
            lineHeight: list_h + 'px',
            fontSize: props.wh[1] / 10,
        }
    }
    const makeList = (list) => {
        return (
            list.map((text, idx)=>{
                return (
                <>
                <li className="litem" key={idx} style={css.list_item}>{text}</li>
                <hr/>
                </>
                )
            })
        )
    }
    return (
        <>
        <div className="article-container" style={css.container}>
            <div className="article-list">
                <div className="title" style={css.list_title}>
                    리스트 박스 타이틀
                </div>
                <ul className="list" style={css.list}>
                    {makeList(props.list_item)}
                </ul>
            </div>
        </div>
        </>
    )
}
ListBox.defaultProps = {
    margin : '0 0 0 0',
    padding : '0 0 0 0',
    wh: ['100%','100%'],
    base_item_cnt: 3,
    list_item: ['리스트입니다222222222222222222222222','리스트입니다2','리스트입니다2','리스트입니다2','fl']
}
export default ListBox;

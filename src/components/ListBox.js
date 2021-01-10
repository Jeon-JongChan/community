import React, {useState} from "react";
import {Link} from "react-router-dom"
import "css/App.scss";
import "css/public.scss";

const ListBox = (props) => {
    const css = {
        container : {
            margin : props.margin,
            width : props.width
        },
        list : {
            height : (props.item_h * props.base_item_cnt) + 'px',
        }
    }
    const makeList = (list) => {
        return (
            list.map((text)=>{
                return (
                <>
                <li className="litem">{text}</li>
                <hr/>
                </>
                )
            })
        )
    }
    return (
        <>
        <div className="article-list" style={css.container}>
            <div className="title">
                리스트 박스 타이틀
            </div>
            <ul className="list" style={css.list}>
                {makeList(props.list_title)}
            </ul>
        </div>
        </>
    )
}
ListBox.defaultProps = {
    margin : '0 0 0 0',
    width: '100%',
    item_h: 23,
    base_item_cnt: 3,
    list_title: ['리스트입니다','리스트입니다2']
}
export default ListBox;

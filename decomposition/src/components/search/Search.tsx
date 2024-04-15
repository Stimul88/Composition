import './search.css'
import React from "react";
import {SearchList} from "../searchList/SearchList.tsx";

export const Search = ({children, list}) => {
    const searchArray = list.map((item) =>
        <SearchList name={item} key={item.name}/>
    )


    return (
        <>
            <ul className="search-array">{searchArray}</ul>
            <div className="search-input">
                {children}
            </div>
            <div className="for-example">Найдется всё.Например, фаза луны сегодня</div>
            <div className="advertisement">
                <img src="#" alt="advertisement img" className="advertisement-img"/>
            </div>
        </>
    )
}

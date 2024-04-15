import './header.css'
import React from 'react'
import {Toolbar} from "../toolbar/Toolbar.tsx";
import {HeaderTitle} from "../headerTitle/HeaderTitle.tsx";
import exchanges from "../../data/exchanges";
import {Exchange} from "../exchange/Exchange.tsx";

export interface IHeader {
    children?: React.ReactNode;
    props: any;
}

export const Header = ({props, children}:IHeader) => {

    const titleArray = props.map((item) =>
            <Toolbar title={item} key={item.headTitle}/>
    )

    const headerTitle = props[0].arrayTitle.map((item) =>
        <HeaderTitle item={item} key={item.title}/>
    )

    const exchange = exchanges.map((item) =>
        <Exchange item={item} key={item.currency}/>
    )

    return (
        <>
            <div className="header">
                <div className="header-box">
                    <div className="different-news">
                        <ul className="toolbar">
                            {titleArray}
                        </ul>
                        <span className='date'>{new Date().toLocaleString()}</span>
                    </div>
                    <ul className="header-title">
                        {headerTitle}
                    </ul>
                    <ul className="header-box-footer">
                        {exchange}
                    </ul>
                </div>
                {children}
            </div>
        </>
    )
}
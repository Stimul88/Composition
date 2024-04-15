import './footer.css'
import React from "react";
import {FooterList} from "../footerList/FooterList.tsx";

export const Footer = ({props}) => {
    return (
        <>
            <div className={"footer-list-title"} >
                {Object.keys(props)}
                <ul className={"footer-list"} >
                    {Object.values(props).map((item, index) =>
                        <FooterList newProps={item} key={index}/>)}
                </ul>
            </div>

        </>
    )
}

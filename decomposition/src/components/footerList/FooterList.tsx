import './footerList.css'

import React from 'react'

export const FooterList = ({newProps}) => {

    const newArray = newProps.map((item, index) =>
        <li key={index}>
            {item.title}
        </li>
    )
    return (
        <>
            {newArray}
        </>
    )
}
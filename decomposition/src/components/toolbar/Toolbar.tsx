// import React from 'react'
import './toolbar.css'

interface ToolbarProps {
    title: string
}

// @ts-ignore
export const Toolbar = ({title}) => {

    return (
        <li className="toolbar-element">{title.headTitle}</li>
    )
}

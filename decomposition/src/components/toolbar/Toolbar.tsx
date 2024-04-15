import './toolbar.css'

interface ToolbarProps {
    title: string
}

export const Toolbar = ({title}) => {

    return (
        <li className="toolbar-element">{title.headTitle}</li>
    )
}

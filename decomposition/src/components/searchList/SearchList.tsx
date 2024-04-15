import './searchList.css'

export const SearchList = ({name}) => {
    return (
        <li className="search-list">{name.name}</li>
    )
}

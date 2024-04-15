import './exchange.css'

export const Exchange = ({item}) => {
    return (
        <li className="exchange-element">{item.currency}</li>
    )
}

import { NavLink } from "react-router-dom"
import './SalesCards.css'
import Helper from './Helper'

const SalesCards=({client})=>{
    const helper = client.state
    
    return (
        <>
        
        <tr>
            <td>
                <NavLink className="link-sale" to={`/sale/${client.id}`}>
                {client.id}
                </NavLink>
            </td>
            <td>
                <b className="name-client">{client.name.toUpperCase()}</b>
            </td>
            <td>
            <a className="contact-sale" target='_blank' rel="noreferrer" href={`https://wa.me/+549${client.telephone}`}>
                        {`+549 ${client.telephone}`}
            </a>
            </td>
            <td>
                {client.quantity} Articulos
            </td>
            <td>
                ${client.total}
            </td>
            <td>
                Borrar
            </td>
                <Helper value={helper}/>
        </tr>
        
        </>
    )
}
export default SalesCards
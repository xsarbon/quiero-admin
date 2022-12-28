import SideBar from "../../SideBar/SideBar"
import './Sale.css'
import './Product/Product.css'
import Table from 'react-bootstrap/Table';
import Filter from "./Filter";
import { useState } from "react";
import Product from "./Product/Product";
import Spinner from "../../../Spinner/Spinner";

const Sale=({sale})=>{
    const [venta,setVenta]=useState()
    
if(sale.items){
    return(
        <>
        <SideBar/>
        {
            
            <div className="sale-container">
                <h2 className="name-client">{sale.name.toUpperCase()}</h2>
                <hr/>
                <section className="sale-detail" >
                    
                    <section>
                        <h4>Datos de la compra</h4>
                        <hr/>
                        <h5>Resumen</h5>
                        <p><b>Total de la compra: </b>${sale.total}.</p>
                        <p><b>Artículos comprados:</b> {sale.quantity}u.</p>
                        <h5><b>Detalles</b></h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Precio/unidad</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sale.items.map((e)=>{
                                        return <Product product={e} />
                                    })
                                }
                            </tbody>
                        </Table>
                    </section>
                    <section className="data-client">
                        <h4 className="client">Datos del cliente</h4>
                            <hr/>
                        <p><b>Nombre:</b> {sale.name}</p>
                        <p><b>Direccion:</b> {sale.adress}</p>
                        <p><b>Provincia: </b> {sale.localidad}</p>
                        <p><b>Localidad: </b>{sale.localidad}</p>
                        <b>Telefono:</b> <a className="contact-sale" target='_blank' rel="noreferrer" href={`https://wa.me/+549${sale.telephone}`}><b>
                        {`+549 ${sale.telephone}`}</b></a>
                        <p><b>Numero de DNI:</b> {sale.dni}</p>
                        <p><b>Email:</b> {sale.email}</p>
                            {
                                sale.state=='done'?<p className="done"><b className="state">Estado:</b> <b className="done">Listo</b></p>:<p className="pending"><b className="state">Estado:</b> <b className="pending">Pendiente</b></p>
                            }
                    </section>
                </section>
                
        </div>
        
        }
        </>
    )
}else{
    
    return <>
        <SideBar/>
        <div className="sale-container">
            <Spinner/>
        </div>
    </>
}
    
}
export default Sale
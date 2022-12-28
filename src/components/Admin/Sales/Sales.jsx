import '../Sales/Sales.css'
import {db} from "../../firebase/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from 'react';
import SalesCards from './SalesCards/SalesCards';
import Table from 'react-bootstrap/Table';
import SideBar from '../SideBar/SideBar';
import Product from './Sale/Product/Product';


const Sales = ()=>{
    const [clientList,setClientList]=useState([]) 
    useEffect(()=>{
        myFunction()
    },[])
    const myFunction=async()=>{  
        const helper = []
        const salesRef=collection(db, "salesClient")
        const q = query(salesRef, orderBy("date",'desc'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                helper.push({
                    state:doc.data().state
                    ,total:doc.data().total
                    ,quantity:doc.data().quantity
                    ,telephone:doc.data().telephone
                    ,name:doc.data().name
                    ,items:doc.data().items
                    ,id:doc.id
                    ,date:doc.data().date
                })
                setClientList(helper)
                
        });
    }

    return(
        <>
        <SideBar/>
        <div className="sales-container">
            <h1 className='sales-tittle'>Ventas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Contacto</th>
                        <th>Articulos</th>
                        <th>Total</th>
                        <th>Acción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                {
                clientList.map((client)=>{
                    return <SalesCards key={client.id} client={client}/>
                })
            }
                </tbody>
            </Table>
            
            
        </div>
        </>
    )
}
export default Sales
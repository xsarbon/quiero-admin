import './EditProd.css'
import SideBar from '../SideBar/SideBar';
import Table from 'react-bootstrap/Table';
import ProdList from './ProdsList/ProdList';



const EditProd = () => {


    return (
            <>
            <SideBar/>
            <div className="edit-container">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Producto</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
            </>
    )
}
export default EditProd
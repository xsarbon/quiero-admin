import { NavLink } from "react-router-dom"
import '../SideBar/SideBar.css'
import Logo from '../../images/logo.png'



const SideBar = () => {

    return (
        <>
            <section className="aside">
                <section className="logo-container">
                    <a className='logo' target='_blank' href="https://www.quierotodotec.com.ar/#/"><img src={Logo} className='logo-img' /></a>
                    <h2 className="aside-title">Administrador</h2>
                </section>

                <NavLink className='link' to='/admin'>
                    <ion-icon id='icon-admin' name="home-outline" />
                    <span className="span-icon">
                        Inicio
                    </span>
                </NavLink>

                <NavLink className='link' to='/analitics'>
                    <ion-icon id='icon-admin' name="pie-chart-outline" />
                    <span className="span-icon">
                        Analitics
                    </span>
                </NavLink>

                <NavLink className='link' to='/ventas'>
                    <ion-icon id='icon-admin' className='icon-admin' name="bag-handle-outline" />
                    <span className="span-icon">
                        Ventas
                    </span>
                </NavLink>

                <NavLink className='link' to='/edit'>
                    <ion-icon id='icon-admin' className='icon-admin' name="pricetag-outline" />
                    <span className="span-icon">
                        Editar Productos
                    </span>
                </NavLink>

                <NavLink className='link' to='/categories'>
                    <ion-icon id='icon-admin' name="shirt-outline" />
                    <span className="span-icon">
                        Categories
                    </span>
                </NavLink>

                <NavLink className='link' to='/subirprod'>
                    <ion-icon id='icon-admin' name="add-circle-outline" />
                    <span className="span-icon">
                        Agregar productos
                    </span>
                </NavLink>

                <NavLink className='link' to='/clientes'>
                    <ion-icon id='icon-admin' name="people-outline" />
                    <span className="span-icon">
                        Clientes
                    </span>
                </NavLink>

                <NavLink className='link' to='/refreshcat'>
                    <ion-icon id='icon-admin' name="newspaper-outline" />
                    <span className="span-icon">
                        Actualizar catalogo
                    </span>
                </NavLink>
            </section>
        </>
    )

}
export default SideBar
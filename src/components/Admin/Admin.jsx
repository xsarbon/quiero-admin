import SideBar from "./SideBar/SideBar"
import Dashboard from './Dashboard/Dashboard'

const Admin = () => {

    return (
        <>
            <section className="Dashboard">
                <SideBar/>
                <Dashboard />
            </section>
        </>
    )

}
export default Admin
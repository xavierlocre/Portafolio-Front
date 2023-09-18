import { Outlet } from "react-router-dom"
import Navbar from "../Componentes/navbar"




const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
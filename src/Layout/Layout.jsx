
import { Outlet } from "react-router-dom"
import NavbarPortafolio from "../Componentes/NavbarPortafolio"





const Layout = () => {
    return (
        <div>
            <NavbarPortafolio/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
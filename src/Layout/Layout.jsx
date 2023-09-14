import { Outlet } from "react-router-dom"
import Navbar from "../Componentes/navbar"
import Footer from "../Componentes/Footer"



const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
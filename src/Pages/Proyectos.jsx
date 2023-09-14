import Formulario from "../Componentes/Formulario"
import { NavLink } from "react-router-dom"

const Proyectos = () => {
    return (
        <> 
            <NavLink to="/create"><button>Crear</button></NavLink>
            
            <Formulario/>
        </>
    )
}

export default Proyectos
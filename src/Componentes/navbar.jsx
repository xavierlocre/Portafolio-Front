import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Sombre Mi</NavLink>
        <NavLink to='/frontendskills'>Front-end skills</NavLink>
        <NavLink to='/backendskills'>Back-end skills</NavLink>
        <NavLink to='/proyectos'>Proyectos</NavLink>
        <NavLink to='/contacto'>Contacto</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
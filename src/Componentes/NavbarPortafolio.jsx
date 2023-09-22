import { NavLink } from "react-router-dom"
import './NavbarPortafolio.css'
import logo from '../assets/img/logo.png'

const NavbarPortafolio = () => {
  return (
    <>
      
        <nav className="navbar">
          <NavLink className="lol" to='/'>Sombre Mi</NavLink>
          <NavLink className="lol" to='/frontendskills'>Front-end skills</NavLink>
          <NavLink className="lol" to='/backendskills'>Back-end skills</NavLink>
          <NavLink className="lol" to='/proyectos'>Proyectos</NavLink>
          <NavLink className="lol" to='/contacto'>Contacto</NavLink>
        </nav>
        <div className="logo">
        <img src={logo}></img>
      </div>
    </>
  )
}

export default NavbarPortafolio
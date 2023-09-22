import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';
import './Proyectos.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Formulario from "../Componentes/Formulario";
import fondo from '../assets/img/fondo.jpg'


const Proyectos = () => {
    return (
        <div>
            <div className="contenedor-con-fondo">
                <img className='imagenfondo' src={fondo} />
            </div>
            <div className="padre4">
                <h1 className="proyecto">Proyectos</h1>
                <div className="boton-container">
                    <NavLink className='navlink-create' to="/create">
                        <button>Crear<Icon icon="ph:link-bold" color="gray" /></button>
                    </NavLink>
                </div>
            </div>
            <div className="crud-carousel">
                <Carousel>
                    <div className="crud-section create">
                        {/* Contenido para la sección "Crear" */}
                        <Formulario />
                        {/* Agrega tu formulario de creación u otro contenido aquí */}
                    </div>
                    <div className="crud-section read">
                        {/* Contenido para la sección "Leer" */}
                        <Formulario />
                        {/* Agrega tu lista de elementos o contenido de lectura aquí */}
                    </div>
                    <div className="crud-section update">
                        {/* Contenido para la sección "Actualizar" */}
                        <Formulario />
                        {/* Agrega tu formulario de actualización u otro contenido aquí */}
                    </div>
                    <div className="crud-section delete">
                        {/* Contenido para la sección "Eliminar" */}
                        <Formulario />
                        {/* Agrega tu formulario de eliminación u otro contenido aquí */}
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Proyectos
import axios from 'axios'
import './Formulario.css'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';

const url = "http://localhost:8081/api/v1/portfolio"
const Formulario = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllcharacters()
    }, [])

    const getAllcharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setCharacters((prevCharacter) => prevCharacter.filter((character) => character.id !== id));
        alert(`ATENCION! ELIMINANDO REPOSITORIO ID#${id}`);
    };

    getAllcharacters()

    return (
        <>
            {
                characters.map(character => (
                    <div className='contenedor-api1' key={character.id}>
                        <div className='contenedor-api2'>
                            <div className='card-api'>
                                <h3>{character.titulo}</h3>
                                <div className='image-contenedor'>
                                <img src={character.imagen} alt="" />
                                </div>
                                <p>{character.git}</p>
                                <p>{character.descripcion}</p>
                                <NavLink to={`/editar/${character.id}`}><button className='boton-edit' ><Icon icon="bxs:edit" color="blue" /></button></NavLink>
                                <button className="boton-borrar" onClick={() => handleDelete(character.id)}><Icon icon="bi:trash-fill" color="maroon" /></button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Formulario
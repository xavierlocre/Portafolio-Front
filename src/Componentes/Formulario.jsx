import axios from 'axios'
import './Formulario.css'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

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
                    <div className='contenedor' key={character.id}>
                        <h3>{character.titulo}</h3>
                        <img src={character.foto} alt="" />
                        <p>{character.git}</p>
                        <p>{character.descripcion}</p>
                        <NavLink to={`/editar/${character.id}`}><button>Modificar</button></NavLink>
                        <button className="buttons" onClick={() => handleDelete(character.id)}>Eliminar</button>
                    </div>
                ))
            }

        </>
    )
}

export default Formulario
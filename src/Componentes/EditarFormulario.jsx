import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './EditarFormulario.css'
import { Icon } from '@iconify/react';
import fondo from '../assets/img/fondo.jpg'

const url = "https://portafolio-backend-production-eb9a.up.railway.app/api/v1/portfolio"

const EditarFormulario = () => {

    const [titulo, setTitulo] = useState('')
    const [imagen, setImagen] = useState('')
    const [git, setGit] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}/${id}`, { titulo: titulo, imagen: imagen, git: git, descripcion: descripcion })
        navigate("/proyectos")
    }
    useEffect(() => {
        const getCharactersById = async () => {

            const response = await axios.get(`${url}/${id}`)
            setTitulo(response.data.titulo)
            setImagen(response.data.imagen)
            setGit(response.data.git)
            setDescripcion(response.data.descripcion)
        }

        getCharactersById()
    }, [id])

    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src={fondo} />
            </div>}

            <div className="contenedor-form"><h2>Editar Repositorio</h2>
                <div className="contenedor-form1">
                    <div className="formulario">
                        <form onSubmit={update}>
                            <div>
                                <label>Titulo:</label>
                                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                            </div>
                            <div>
                                <label>Imagen:</label>
                                <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                            </div>
                            <div>
                                <label>Git:</label>
                                <input type="text" value={git} onChange={(e) => setGit(e.target.value)} />
                            </div>
                            <div>
                                <label>Descripción:</label>
                                <textarea name="" id="" cols="30" rows="10" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}>
                                </textarea>
                            </div>
                            <button type="submit"><Icon icon="bxs:edit" color="blue" /></button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditarFormulario
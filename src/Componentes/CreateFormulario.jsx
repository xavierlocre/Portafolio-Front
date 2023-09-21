import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './CreateFormulario.css'
import { Icon } from '@iconify/react';



const url = "https://portafolio-backend-production-eb9a.up.railway.app/api/v1/portfolio"

const CreateFormulario = () => {

    const [titulo, setTitulo] = useState('')
    const [imagen, setImagen] = useState('')
    const [git, setGit] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { titulo: titulo, imagen: imagen, git: git, descripcion: descripcion })
        navigate("/proyectos")
    }

    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src='\src\assets\img\retrato-dinamico-joven-mujer-bailando-hiphop-aislado-sobre-fondo-negro-efecto-luces-mixtas.jpg' />
            </div>}
            <h2>Crear Repositorio</h2>
            <div className="contenedor-form">
                <div className="contenedor-form1">
                    <div className="formulario">
                        <form onSubmit={guardar}>
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
                            <button type="submit"><Icon icon="bi:send-fill" color="lime" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateFormulario
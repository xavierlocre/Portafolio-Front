import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './CreateFormulario.css'



const url = "http://localhost:8081/api/v1/portfolio"

const CreateFormulario = () => {

    const [titulo, setTitulo] = useState('')
    const [foto, setFoto] = useState('')
    const [git, setGit] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(url, { titulo: titulo, foto: foto, git: git, descripcion: descripcion })
        navigate("/proyectos")
    }

    return (
    <>
        <h2>Crear Repositorio</h2>
        <form onSubmit={guardar}>
            <div>
                <label>Titulo:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div>
                <label>Foto:</label>
                <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)}/>
            </div>
            <div>
                <label>Git:</label>
                <input type="text" value={git} onChange={(e) => setGit(e.target.value)}/>
            </div>
            <div>
                <label>Descripción:</label>
                <textarea name="" id="" cols="30" rows="10" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}>

                </textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </>
    )
}

export default CreateFormulario
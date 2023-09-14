import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = "http://localhost:8081/api/v1/portfolio"

const EditarFormulario = () => {

    const [titulo, setTitulo] = useState('')
    const [foto, setFoto] = useState('')
    const [git, setGit] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()

    const {id} = useParams

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}/${id}`, {titulo: titulo, foto: foto, git: git, descripcion: descripcion})
        navigate("/proyectos")
    }
    useEffect( () => {
        const getCharactersById = async () => {

            const response = await axios.get(`${url}/${id}`)
            setTitulo(response.data.titulo)
            setFoto(response.data.foto)
            setGit(response.data.git)
            setDescripcion(response.data.descripcion)
        }

        getCharactersById()
    }, [id])

    return (
        <>
            <h2>Editar Repositorio</h2>
            <form onSubmit={update}>
                <div>
                    <label>Titulo:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
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
                <button type="submit">Modificar</button>
            </form>
        </>
    )
}

export default EditarFormulario
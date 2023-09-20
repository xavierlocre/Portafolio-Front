import { createBrowserRouter } from 'react-router-dom'
import SobreMi from '../Pages/SobreMi';
import FrontendSkills from '../Pages/FrontendSkills';
import BackendSkills from '../Pages/BackendSkills';
import Proyectos from '../Pages/Proyectos';
import Contacto from '../Pages/Contacto';
import Layout from '../Layout/Layout';
import CreateFormulario from '../Componentes/CreateFormulario';
import EditarFormulario from '../Componentes/EditarFormulario';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
        path: "/",
        element: <SobreMi />,
    },
    {
        path: "/frontendskills",
        element: <FrontendSkills />,
    },
    {
        path: "/backendskills",
        element: <BackendSkills />,
    },
    {
        path: "/proyectos",
        element: <Proyectos />,
    },
    {
        path: "/contacto",
        element: <Contacto />,
    },
    {
        path: "/create",
        element: <CreateFormulario />,
    },
    {
        path: "/editar/:id",
        element: <EditarFormulario />,
    },
        ]
    }
    
]);
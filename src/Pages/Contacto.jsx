import './Contacto.css'


const Contacto = () => {
    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src='\src\assets\img\retrato-dinamico-joven-mujer-bailando-hiphop-aislado-sobre-fondo-negro-efecto-luces-mixtas.jpg' />
            </div>}
            <div className='dw'>
                <a href="\src\assets\texto\Xavier López Crespo (2).pdf" download="CV Xavier López Crespo" className="boton-descarga">Descargar CV</a>
            </div>
            <div className='container'>
                <img className='imagen-card2' src="\src\assets\img\ck492rcbhk4g0081fpd0.jpg" />
            </div>
            <footer className="footer">
                <div className="contacto">
                    <h2>Contacto</h2>
                    <p>Dirección: Montblanc, Tarragona, Spain</p>
                    <p>Correo Electrónico: xavier.lopcre@gmail.com</p>
                </div>
                <div className="redes-sociales">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.linkedin.com/in/xavier-lopez95/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <br></br>
                    <br></br>
                    <a href="https://github.com/xavierlocre" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </footer>
        </>
    )
}

export default Contacto
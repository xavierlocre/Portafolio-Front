import './SobreMi.css'
import fondo from '../assets/img/fondo.jpg'


const SobreMi = () => {
    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src={fondo} />
            </div>}
            <div className='padre'>
                <div className='contenedor'>
                    <div className='card-img'>
                        <img className='imagen-card' src="\src\assets\img\WhatsApp Image 2023-07-24 at 08.40.03.jpeg" />
                    </div>
                </div>
                <div className='contenedor-skills'>
                    <div className='card'>
                        <div className='separador-sobremi'>
                            <h2 className='full'>Full Stack Developer</h2>
                            <h1 className='nom'>Xavier López Crespo</h1>
                            <p className='hab'>Soy un Desarrollador web junior full-stack
                                con una sólida base de conocimientos en diseño
                                de interfaces y experiencia de usuario. Mi capacidad
                                para crear experiencias de usuario atractivas y funcionales es
                                respaldada por mis habilidades técnicas en desarrollo web.
                            </p>
                            <p className='hab'>Una de mis mayores fortalezas es mi capacidad para aprender
                                rápidamente y adaptarme a nuevos entornos. Esto me permite
                                mantenerme al día con las últimas tecnologías y tendencias
                                en el mundo del desarrollo web. Además, soy un comunicador
                                efectivo, lo que facilita la colaboración en equipo y la
                                comprensión de los requisitos del proyecto.
                            </p>
                            <p className='hab'>No solo soy un apasionado del desarrollo web, sino
                                que también poseo habilidades sociales e interpersonales
                                sólidas que me permiten liderar equipos con éxito. Creo
                                en la importancia de la comunicación clara y la colaboración
                                para alcanzar los objetivos del proyecto.
                            </p>
                            <p className='hab'>Mi objetivo como Desarrollador web junior es seguir creciendo y
                                evolucionando en mi carrera. Busco constantemente oportunidades
                                para contribuir a proyectos web innovadores y continuar aprendiendo
                                de mis colegas y mentores. Mi enfoque en la calidad
                                y la resolución eficiente de problemas me permite identificar, probar
                                y solucionar errores, garantizando siempre el funcionamiento óptimo
                                en los proyectos que desarrollo.
                            </p>
                            <p className='hab'>Mi objetivo como Desarrollador web junior es seguir creciendo y
                                Estoy emocionado por las posibilidades que el mundo del desarrollo
                                web ofrece y estoy comprometido a seguir mejorando mis habilidades
                                y conocimientos para ofrecer soluciones e ideas a cada proyecto
                                en el que participe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreMi
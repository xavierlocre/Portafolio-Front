import './BackendSkills.css'

const BackendSkills = () => {
    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src='\src\assets\img\retrato-dinamico-joven-mujer-bailando-hiphop-aislado-sobre-fondo-negro-efecto-luces-mixtas.jpg' />
            </div>}
            <div className='padre3'>
                <div className='contenedor-izquiero2'>
                    <div className="cardback-izquierdo">
                        <div className='separacion'>
                            <h3>Java:</h3>
                            <p>Amplia experiencia en programación en Java,
                                abarcando desde aplicaciones de escritorio
                                hasta desarrollo web. Mi habilidad en este
                                lenguaje se traduce en la creación de software
                                robusto y escalable, con un enfoque en la eficiencia
                                y la calidad del código. Mi pasión por la resolución de
                                problemas y la innovación impulsa mi contribución a proyectos
                                Java de alto rendimiento.
                            </p>
                            <h3>Bases de Datos: </h3>
                            <p>
                                Experto en la gestión y diseño de bases de datos, con amplia
                                experiencia en SQL y NoSQL. Mi enfoque se centra en la creación de
                                estructuras de datos eficientes y seguras para respaldar aplicaciones
                                y sistemas. Soy apasionado por la optimización del rendimiento y la
                                garantía de la integridad de los datos, contribuyendo a la confiabilidad
                                y escalabilidad de los proyectos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contenedor-derecho2'>
                    <div className="card-estadistica2">
                        <section className='column column--right'>
                            <article className="cardd">
                                <h2 className="card__title">Backend</h2>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">Java 20% </p>
                                        <div className="skills__bar111 skills__bar--70"></div>
                                    </div>

                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">Postman   30%</p>
                                        <div className="skills__bar11 skills__bar--80"></div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">PostgreSQL  10%</p>
                                        <div className="skills__bar22 skills__bar--60"></div>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackendSkills
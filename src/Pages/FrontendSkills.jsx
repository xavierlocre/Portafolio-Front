import './FrontendSkills.css'

const FrontendSkills = () => {
    return (
        <>
            {<div className="contenedor-con-fondo">
                <img className='imagenfondo' src='\src\assets\img\retrato-dinamico-joven-mujer-bailando-hiphop-aislado-sobre-fondo-negro-efecto-luces-mixtas.jpg' />
            </div>}
            <div className='padre2'>
                <h1 className='front'>Front-End Skills</h1>
                <div className='contenedor-izquierda'>
                    <div className="cardfront-izquierda">
                        <div className='separacion1'>
                            <h3>UI/UX Design:</h3>
                            <p> Conocimiento en crear interfaces digitales visualmente
                                atractivas y altamente usables. Mi enfoque en UI se traduce
                                en diseños estéticos y funcionales, mientras que en UX, me
                                esfuerzo por comprender las necesidades del usuario y crear
                                experiencias fluidas y satisfactorias. Mi trabajo se basa en
                                la investigación, la empatía con el usuario y la iteración
                                continua para lograr resultados excepcionales en el diseño de
                                productos digitales.
                            </p>
                            <h3>HTML, CSS, JavaScript:</h3>
                            <p> Conocimiento en el desarrollo web front-end con experiencia
                                sólida en HTML, CSS y JavaScript. Creo interfaces web atractivas
                                y receptivas, utilizando estándares modernos y técnicas avanzadas.
                                Mi enfoque se centra en la usabilidad, la accesibilidad y la optimización
                                para ofrecer experiencias excepcionales en la web.
                            </p>
                            <h3>Sass, React:</h3>
                            <p> Conocimientos en el uso de Sass para la creación de estilos eficientes
                                y modulares en aplicaciones React. Combino la potencia de Sass con
                                la versatilidad de React para desarrollar interfaces web dinámicas
                                y elegantes. Mi enfoque se centra en la eficiencia del código y la
                                mejora de la experiencia del usuario a través de componentes interactivos
                                y atractivo
                            </p>
                        </div>
                    </div>
                </div>

                <div className='contenedor-derecha'>
                    <div className="card-estadistica">
                        <section className='column1 column--right'>
                            <article className="cardd">
                                <h2 className="card__title">Frontend</h2>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">HTML 90% </p>
                                        <div className="skills__bar skills__bar--70"></div>
                                    </div>

                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">CSS   90%</p>
                                        <div className="skills__bar1 skills__bar--80"></div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">Javascript  60%</p>
                                        <div className="skills__bar2 skills__bar--60"></div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">React 50% </p>
                                        <div className="skills__bar7 skills__bar--70"></div>
                                    </div>

                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">Sass   30%</p>
                                        <div className="skills__bar8 skills__bar--80"></div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill__items">
                                        <p className="skills__tech">Node.js 30%</p>
                                        <div className="skills__bar9 skills__bar--60"></div>
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

export default FrontendSkills
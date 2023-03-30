import TemplateCabezal from '../cabezal-template/TemplateCabezal';
import Carousel from '../carousel-template/Carousel';
import './Ecogranja.css';
const Ecogranja = () => {
    const img = "https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FOvejas%20y%20ni%C3%B1os.jpg?alt=media&token=e43ca480-6dd9-46a1-80cb-12a500383723";
    const arrayCarousel = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FCaballo%20comiendo.jpg?alt=media&token=4c4165e8-0753-4fd3-a14f-222fba1c8c3d',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FGallina%20comiendo.jpg?alt=media&token=3d5ba058-586f-4904-bc2e-8741f36a682b',
            position: 'right'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FPatitos.jpg?alt=media&token=1840d9c2-f2e2-4fba-a97a-5474fee76bfd',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FOvejita.jpg?alt=media&token=2ec9e518-b81a-4a70-8d10-7ee9d24a2ab5',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FPato%20ba%C3%B1andose.jpg?alt=media&token=2a9ba5d3-4cc2-40ca-ac51-0d9f809861f2',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FGallinas%20caminando.jpg?alt=media&token=ffdeea90-0eb1-4c9d-826b-3667b6894797',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FPatos.jpg?alt=media&token=ce5ba225-b8f9-44bd-93d1-2a0725be23c2',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FPato%20en%20el%20agua.jpg?alt=media&token=57713a84-1883-42c5-912c-9d2650b7cd01',
            position: 'left'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FGallina%20y%20pollitos.jpg?alt=media&token=c7108995-47b2-4115-9f6d-7be46a833fa4',
            position: 'center'
        }
    ]
    return(
        <>
        <TemplateCabezal titulo={'Ecogranja'} img={img} position={'center'} />
        <section className="sectionEcogranja1">
            <div className="container">
                <div className="ecogranjaDescripcion row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgBoxEcogranja">
                        </div>
                        <div className="imgBoxEcogranja2">
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="text-start boxTextDescripcion">
                            <h2>La Ecogranja es un instrumento transversal en el marco de la innovación educativa y de la educación ambiental.</h2>
                            <p>Permite poner en práctica un aprendizaje activo y cooperativo basado en la resolución planificada de problemas, así como un eficaz desarrollo de actitudes y valores conducentes a un comportamiento más comprometido con la conservación y mejora del entorno, y la utilización sostenible de los recursos ambientales.</p>
                            <p>En los encuentros se privilegia el vínculo, la participación, la comunicación y la creatividad, rescatando lo grupal, la elaboración colectiva y participativa de los distintos contenidos, poniendo énfasis en lo vivencial.</p>
                            <p>Se estudian temas como el consumo, la alimentación, los desechos, el reciclaje, la salud y el desarrollo de los pueblos.</p>
                            <h3>Las visitas están destinadas a grupos de infancias, adolescencias y juventudes, en edad escolar.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="ecogranjaObjetivos">
            <div className="container">
                <h2>Objetivos generales</h2>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <h3>Desde un enfoque técnico</h3>
                            <ul>
                                <li>Brindar herramientas teórico- prácticas  para que tengan la capacidad de generar y producir una huerta autogestiva.</li>
                                <li>Compartir saberes para el reconocimiento y utilización de plantas nativas.</li>
                                <li>Aprender de las distintas especies de animales y sus cuidados.</li>
                                <li>Elaborar comidas naturales.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos">
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FNi%C3%B1os%20y%20gallinas.jpg?alt=media&token=031ae23f-0caf-473a-87f2-38dc9db88466')`}}></div>
                        </div>
                    </div>
                </div>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <h3>Desde un enfoque pedagógico</h3>
                            <ul>
                                <li>Aportar una metodología de trabajo práctico-vivencial para trabajar y enseñar todos los contenidos mencionados anteriormente mediante herramientas de exploración y autogestión.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos">
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FJovenes%20en%20la%20tierra.jpg?alt=media&token=44c369d9-3cd0-4797-a38a-72a186edcc97')`}}></div>
                        </div>
                    </div>
                </div>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <h3>Desde un enfoque recreativo</h3>
                            <ul>
                                <li>Desde la recreación podemos abordar varios campos que nos ayudan a complementar el taller y generar actividades estético-expresivas, de cuidado ambiental y de intercambio grupal.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos">
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FNi%C3%B1os%20merendando.jpg?alt=media&token=891ec70a-337e-4090-9aad-ca133408b443')`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="ecogranjaObjetivos">
            <div className="container">
                <h2>Objetivos específicos</h2>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos" style={{borderRadius: '0px 40px'}}>
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FNi%C3%B1os%20y%20patos.jpg?alt=media&token=9419439b-7164-4cdf-bb56-c8c8f7e9c4c6')`}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <ul>
                                <li><b>Establecer lazos afectivos con el medio</b>, desarrollando la capacidad de disfrutar del entorno, compatibilizando ese disfrute con la conservación y mantenimiento de equilibrio en los diferentes usos. </li>
                                <li><b>Percibir las variedades sensoriales</b> que nos ofrece la naturaleza.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos" style={{borderRadius: '0px 40px'}}>
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FZapallo.jpg?alt=media&token=d73c1276-7716-461c-8962-8c4c79d26f0a')`}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <ul>
                                <li><b>Relacionar</b> los diferentes alimentos con las estaciones del año según el calendario de siembra.</li>
                                <li><b>Incentivar a probar nuevos sabores</b>, nuevas combinaciones de alimentos y se incorporen hábitos saludables de alimentación a través de vivenciar el proceso de elaboración de algunos alimentos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bloqueObjetivos row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="imgContBLoqueObjetivos" style={{borderRadius: '0px 40px'}}>
                            <div className="imgContBloqueObjetivosImg text-center" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Granja%20educativa%2FFlor%20frente.jpg?alt=media&token=da437464-6e8c-41cb-9282-95160feb4354')`}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 text-start">
                        <div className="bloqueObjetivosDescripcion">
                            <ul>
                                <li><b>Alcanzar mayor conocimiento del entorno natural</b>, sus cuidados y formas de preservación, desarrollando comportamientos y valores para ello, que puedan transferirse a su vida diaria.</li>
                                <li><b>Valorar la huerta orgánica</b> como forma natural y sustentable de producir hortalizas sanas y variadas durante todo el año.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="ecogranjasEtapas">
            <div className="container flexboxEtapas">
                <div className="etapas">
                    <div className="etapasHeader">
                        Etapas de los encuentros
                    </div>
                    <ul className='etapasBody text-start'>
                        <li><b>1- Ronda de bienvenida</b> al grupo y organización de las actividades del día.</li>
                        <li><b>2- Ejecución</b> de actividades técnicas y recreativas en la Ecogranja.</li>
                        <li><b>3- Reflexión y debate</b> sobre las actividades desarrolladas.</li>
                    </ul>
                </div>
                <div className="actividades">
                    <div className="actividadesHeader">
                        Actividades a desarrollar
                    </div>
                    <ul className='actividadesBody text-start'>
                        <li><b>Cocina</b> en la naturaleza con productos de la huerta.</li>
                        <li><b>Huerta Agroecológica</b>: Compostaje, siembra y trasplante de plantines, armado de canteros.</li>
                        <li><b>Contacto con los animales</b> y enseñanzas del cuidado hacia las diferentes especies.</li>
                    </ul>
                </div>

            </div>
        </section>
        <Carousel arrayCarousel={arrayCarousel} titulo={'Habitantes del Changüí'}/>
        </>
    );
}
export default Ecogranja;
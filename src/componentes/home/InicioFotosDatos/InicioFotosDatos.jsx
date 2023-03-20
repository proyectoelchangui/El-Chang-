import './InicioFotosDatos.css'
import Suelo from '../../../imagenes/imagenesInicio/Suelo.jpg'
import Compost from '../../../imagenes/imagenesInicio/Compost.jpg'
import EducacionJuventudes from '../../../imagenes/imagenesInicio/Educación-a-juventudes.jpg'
import Huevos from '../../../imagenes/imagenesInicio/Huevos.jpg'
import Tomates from '../../../imagenes/imagenesInicio/Tomates.jpg'
import ParticipacionActiva from '../../../imagenes/imagenesInicio/Participación-activa.jpg'
import { useState } from 'react'


const InicioFotosDatos = () => {


    const [suelo, setSuelo] = useState(false);
    const [compost, setCompost] = useState(false);
    const [educacionJuventudes, setEducacionJuventudes] = useState(false);
    const [huevos, setHuevos] = useState(false);
    const [tomates, setTomates] = useState(false);
    const [participacionActiva, setParticipacionActiva] = useState(false);

    return (
        <>
            <div>
                <h2>Datos de interés</h2>
            </div>
            <div className='gridFotosDatos row'>


                <div className="col-6 mb-4">
                    {
                        suelo &&
                        <div>
                            <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setSuelo(!suelo)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>Los suelos, según la mirada convencional, se utilizan únicamente como soporte de plantas y animales, vertiendo en el, grandes cantidades de insumos químicos, dejándolo así estéril, sin presencia de vida.</li>
                                    <li className='EventoTexto'>Esto es un grave error, ya que poseen otras funciones además de sostén. Son refugio de millones de microrganismos como hongos, bacterias e insectos claves para que el suelo siga latiendo y entregando nutrientes, oxigeno, agua y protegiendo a las plantas. Actuemos por un suelo vivo y sano.</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setSuelo(!suelo)} style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FSuelo.jpg?alt=media&token=49db0e21-14a4-44c1-91ad-c45a2624805b)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setSuelo(!suelo)}>
                            <div className='fotosDatosTexto'>¿Por qué debemos cuidar <br /> y mejorar nuestro suelo?</div>
                        </div>
                    </div>
                </div>

                <div className="col-6 mb-4">
                    {
                        compost &&
                        <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setCompost(!compost)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>El compost, es  un proceso donde gracias a microorganismos del suelo junto con la temperatura, el agua y el oxigeno se descomponen los residuos orgánicos obteniendo como producto final un sustrato muy rico en nutrientes conocido como tierra negra.</li>
                                    <li className='EventoTexto'>Esta técnica, es significativa como medio alternativo de generación de sustratos para un suelo fértil, al tiempo que permite reducir el impacto ambiental con menos residuos urbanos, que son el 50% de los generados por cada persona.</li>
                                </ul>
                            </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setCompost(!compost)} style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FCompost.webp?alt=media&token=4e7f4810-7266-4351-adbf-600b96fe9a45')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setCompost(!compost)}>
                            <div className='fotosDatosTexto'>Compost, la tendencia que <br /> ayuda al medio ambiente</div>
                        </div>
                    </div>
                </div>

                <div className="col-6 mb-4">
                    {
                        educacionJuventudes &&
                        <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setEducacionJuventudes(!educacionJuventudes)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>Los niños, niñas y adolescentes son los menos responsables del cambio climático, sin embargo, serán quienes más sufrirán sus consecuencias.</li>
                                    <li className='EventoTexto'>La educación ambiental, es una poderosa herramienta para generar un cambio de paradigma y crear conciencia, enfrentar los retos del cambio climático y lograr un cambio de comportamiento sistemático y duradero.</li>
                                </ul>
                            </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setEducacionJuventudes(!educacionJuventudes)} style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FEducaci%C3%B3n%20a%20juventudes.jpg?alt=media&token=aadd785e-a62d-4cd7-b1d8-1472404e688a')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setEducacionJuventudes(!educacionJuventudes)}>
                            <div className='fotosDatosTexto'>La importancia de la <br /> educación ambiental para las <br /> juventudes</div>
                        </div>
                    </div>
                </div>

                <div className="col-6 mb-4">
                    {
                        huevos &&
                        <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setHuevos(!huevos)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>Es un método de producción respetuosa hacia las gallinas, las cuales están libres, en contacto con la naturaleza la mayor parte del día, a diferencia de la producción convencional, donde viven las 24 horas en jaulas.</li>
                                    <li className='EventoTexto'>Tampoco se las fuerza a que produzcan, como pasa habitualmente, con luz o temperatura. Se respeta sus ciclos, sabiendo que en las épocas de otoño e invierno donde las temperaturas son bajas y los días cortos, dejan de poner.</li>
                                </ul>
                            </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setHuevos(!huevos)} style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FHuevos.jpg?alt=media&token=fd6e6826-b69f-4ba8-ae94-79af66d830f2')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setHuevos(!huevos)}>
                            <div className='fotosDatosTexto'>¿Qué son los huevos <br /> de gallinas libres?</div>
                        </div>
                    </div>
                </div>

                <div className="col-6 mb-4">
                    {
                        tomates &&
                        <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setTomates(!tomates)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                    <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                    <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                    <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                    <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                                </ul>
                            </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setTomates(!tomates)} style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FTomates.jpg?alt=media&token=7a0734d3-3ecc-4993-990a-7a8d1f97f6f7')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setTomates(!tomates)}>
                            <div className='fotosDatosTexto'>¿Por qué consumir productos <br /> agroecólogicos?</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 mb-4">
                    {
                        participacionActiva &&
                        <div className='divEventos'>
                            <div className='divEvento' onMouseLeave={() => setParticipacionActiva(!participacionActiva)}>
                                <ul className='divEventoTexto'>
                                    <li className='EventoTexto'>A través de los voluntariados, se trabaja con la consigna de cuidar el medio ambiente, con más amor y respeto.</li>
                                    <li className='EventoTexto'>El objetivo principal, es modificar el vínculo con la pachamama: reducir la contaminación, respetar a los animales, y evitar cualquier tipo de práctica que pueda influir en los entornos naturales.</li>
                                    <li className='EventoTexto'>Se busca disminuir el impacto negativo sobre el medio ambiente.</li>
                                </ul>
                            </div>
                        </div>
                    }

                    <div className="fotosDatosFoto" onMouseEnter={() => setParticipacionActiva(!participacionActiva)} style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FParticipaci%C3%B3n%20activa.jpg?alt=media&token=cf80be23-8c7e-4d60-bd77-c3899ab14ae7')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <div className='fotosDatosDivTexto' onMouseEnter={() => setParticipacionActiva(!participacionActiva)}>
                            <div className='fotosDatosTexto'>Cómo tu participación activa <br /> puede ayudar a la preservación <br /> y protección del planeta.</div>
                        </div>
                    </div>
                </div>       

            </div>
        </>
    );
}
export default InicioFotosDatos;
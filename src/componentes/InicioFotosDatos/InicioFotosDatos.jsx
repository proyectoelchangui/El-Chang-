import './InicioFotosDatos.css'
import Suelo from '../../imagenes/imagenesInicio/Suelo.jpg'
import Compost from '../../imagenes/imagenesInicio/Compost.jpg'
import EducacionJuventudes from '../../imagenes/imagenesInicio/Educación a juventudes.jpg'
import Huevos from '../../imagenes/imagenesInicio/Huevos.jpg'
import Tomates from '../../imagenes/imagenesInicio/Tomates.jpg'
import ParticipacionActiva from '../../imagenes/imagenesInicio/Participación activa.jpg'
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
            <div className='gridFotosDatos'>

                <div className='fotosDatosTarjeta'>
                    {
                        suelo &&
                        <div className='divEvento' onMouseLeave={() => setSuelo(!suelo)}>
                            <ul className='divEventoTexto'>
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={Suelo} onMouseEnter={() => setSuelo(!suelo)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setSuelo(!suelo)}>
                        <p className='fotosDatosTexto'>¿Por qué debemos cuidar y mejorar nuestro suelo?</p>
                    </div>
                </div>

                <div className='fotosDatosTarjeta'>
                    {
                        compost &&
                        <div className='divEvento' onMouseLeave={() => setCompost(!compost)}>
                            <ul className='divEventoTexto'>
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={Compost} onMouseEnter={() => setCompost(!compost)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setCompost(!compost)}>
                        <p className='fotosDatosTexto'>Compost, la tendencia que ayuda al medio ambiente</p>
                    </div>
                </div>

                <div className='fotosDatosTarjeta'>
                    {
                        educacionJuventudes &&
                        <div className='divEvento' onMouseLeave={() => setEducacionJuventudes(!educacionJuventudes)}>
                            <ul className='divEventoTexto'>
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={EducacionJuventudes} onMouseEnter={() => setEducacionJuventudes(!educacionJuventudes)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setEducacionJuventudes(!educacionJuventudes)}>
                        <p className='fotosDatosTexto'>La importancia de la educación ambiental para las juventudes</p>
                    </div>
                </div>

                <div className='fotosDatosTarjeta'>
                {
                        huevos &&
                        <div className='divEvento' onMouseLeave={() => setHuevos(!huevos)}>
                            <ul className='divEventoTexto'>
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={Huevos} onMouseEnter={() => setHuevos(!huevos)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setHuevos(!huevos)}>
                        <p className='fotosDatosTexto'>¿Qué son los huevos de gallinas libres?</p>
                    </div>
                </div>

                <div className='fotosDatosTarjeta'>{
                        tomates &&
                        <div className='divEvento' onMouseLeave={() => setTomates(!tomates)}>
                            <ul className='divEventoTexto'>
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={Tomates} onMouseEnter={() => setTomates(!tomates)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setTomates(!tomates)}>
                        <p className='fotosDatosTexto'>¿Por qué consumir productos agroecólogicos?</p>
                    </div>
                </div>

                <div className='fotosDatosTarjeta'>{
                        participacionActiva &&
                        <div className='divEvento' onMouseLeave={() => setParticipacionActiva(!participacionActiva)}>
                            <ul className='divEventoTexto' >
                                <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                                <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                                <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                                <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                                <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                            </ul>
                        </div>}
                    <img className='fotosDatosFoto' src={ParticipacionActiva} onMouseEnter={() => setParticipacionActiva(!participacionActiva)} alt="" />
                    <div className='fotosDatosDivTexto' onMouseEnter={() => setParticipacionActiva(!participacionActiva)}>
                        <p className='fotosDatosTexto'>Cómo tu participación activa puede ayudar a la preservación y protección del planeta.</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default InicioFotosDatos;
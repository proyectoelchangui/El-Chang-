import './InicioFotosDatos.css'
import Duraznos from '../../imagenes/Duraznos.jpg'

const InicioFotosDatos = () => {
    return (
        <>
            <div>
                <h2>Datos de interés</h2>
            </div>
            <div className='gridFotosDatos'>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>¿Por qué debemos cuidar y mejorar nuestro suelo?</p>
                    </div>
                </div>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>Compost, la tendencia que ayuda al medio ambiente</p>
                    </div>
                </div>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>La importancia de la educación ambiental para las juventudes</p>
                    </div>
                </div>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>¿Qué son los huevos de gallinas libres?</p>
                    </div>
                </div>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>¿Por qué consumir productos agroecólogicos?</p>
                    </div>
                </div>
                <div className='fotosDatosTarjeta'>
                    <img className='fotosDatosFoto' src={Duraznos} alt="" />
                    <div className='fotosDatosDivTexto'>
                        <p className='fotosDatosTexto'>Cómo tu participación activa puede ayudar a la preservación y protección del planeta.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default InicioFotosDatos;
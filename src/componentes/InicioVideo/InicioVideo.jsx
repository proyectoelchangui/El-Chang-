import './InicioVideo.css'
import Hojas from '../../imagenes/Hojas.jpg'

const InicioVideo = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='InicioVideoTexto'>Nuestro espacio, naturaleza al alcance de todos</h2>
                </div>
                    <div className='divInicioVideo'>
                        <img className='inicioVideo' src={Hojas} alt="" />
                </div>
                
                
            </div>
        </>
    );
}
export default InicioVideo;
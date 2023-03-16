import './InicioNaturaleza.css'
import Hojas from '../../../imagenes/imagenesInicio/Hojas.jpg'

const InicioNaturaleza = () => {
    return (
        <>
            <div className='divNaturaleza'>
                <div className="divTexto">
                    <p className='texto'>Conectá con la naturaleza</p>
                </div>
                <div className='divFoto'>
                    <img className='Foto' src={Hojas} alt="" />
                </div>
            </div>
        </>
    );
}
export default InicioNaturaleza;
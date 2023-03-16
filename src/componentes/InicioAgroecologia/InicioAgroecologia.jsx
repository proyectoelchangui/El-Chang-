import './InicioAgroecologia.css'
import Duraznos from '../../imagenes/imagenesInicio/Duraznos.jpg'

const InicioAgroecologia = () => {
    return (
        <>
            <div className='divAgroecologia'>
                <div className='divTitulo'>
                    <h2 className='Titulo'>¿Qué es la agroecología?</h2>
                </div>
                <div className='div'>
                    <div className='divFotoDuraznos'>
                        <img className='fotoDuraznos' src={Duraznos} alt="" />
                    </div>
                    <div className='divTextoAgroecologia'>
                        <p className='textoAgroecologia'>La agroecología es un enfoque holístico e integrado que aplica simultáneamente conceptos y principios ecológicos y sociales al diseño y la gestión de sistemas agrícolas y alimentarios sostenibles.

                            Trata de optimizar las interacciones entre las plantas, los animales, los seres humanos y el medio ambiente, al mismo tiempo que aborda la necesidad de sistemas alimentarios socialmente equitativos en los que las personas puedan elegir lo que comen, cómo y dónde se produce.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default InicioAgroecologia;
import TemplateCabezal from "../cabezal-template/TemplateCabezal";
import Duraznos from '../../../imagenes/imagenesInicio/Duraznos.jpg'

const QuinenesSomos = () => {
    return(
        <>
            <div className="container">
                <TemplateCabezal titulo={'Quienes Somos'} img={Duraznos} />
            </div>

        </>
    );
}
export default QuinenesSomos
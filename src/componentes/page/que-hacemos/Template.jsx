import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TemplateCabezal from "../cabezal-template/TemplateCabezal";
import customFetch from "../../../utils/Fetch";
const { QueHacemosArray } = require('../../../utils/QueHacemos');
const Template = () => {
    const img = 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FEsteban%20Qu%C3%A9%20hacemos.jpg?alt=media&token=ca91950d-314f-4254-bdfb-364a7dc1448f';
    const {titulo} = useParams();
    const [datos, setDatos] = useState({})

    useEffect(() => {
        customFetch(100, QueHacemosArray.find(item => item.slug === titulo))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [titulo]);
    return(
        <>
            <TemplateCabezal titulo={'Qué hacemos'} img={img} position={'center'} />
            <div className="container">
                <section className="contenedorTemplate">
                    <div className="contenedorColor">
                        <div className="templateHeader">
                            <Link to="/que-hacemos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </Link>
                            <h1>{datos.titulo}</h1>
                        </div>
                        <div className="templateDescripcion1 text-center" dangerouslySetInnerHTML={{ __html: datos.descripcion1 }}>
                            
                        </div>
                        <div className="containerGaleriTemplate row">
                            {
                                datos.galeria?.map((img, index) => (
                                    <div className="col-4 mb-4" key={index}>
                                        <div className="templateGaleriaBox" style={{backgroundImage: `url('${img.url}')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                                            <div className="fondoBox"></div>
                                            <p>{img.nombre}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="templateDescripcion1 text-center" dangerouslySetInnerHTML={{ __html: datos.descripcion2 }}>
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Template;
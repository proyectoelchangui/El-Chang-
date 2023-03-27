import { Link } from "react-router-dom";
import TemplateCabezal from "../cabezal-template/TemplateCabezal";
import './QueHacemos.css';

const QueHacemos = () => {
    const img = 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FEsteban%20Qu%C3%A9%20hacemos.jpg?alt=media&token=ca91950d-314f-4254-bdfb-364a7dc1448f';
    return(
        <>
        <TemplateCabezal titulo={'Qué hacemos'} img={img} position={'center'} />
        <div className="container">
            <section className="queHacemosFlexBox row">
                <div className="col-6 mb-4">
                    <Link to="/que-hacemos/venta-de-productos-agroecologicos">
                        <div className="boxQueHacemos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FCaj%C3%B3n%20de%20verduras.jpg?alt=media&token=1d4e4703-42d8-46fa-b746-671e266545aa')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                            <div className="fondoBox">
                                <div className="TextoBox">Venta de productos <br /> agroecológicos</div>
                                <div className="masBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 mb-4">
                    <Link to="/que-hacemos/intercambio-de-semillas">
                        <div className="boxQueHacemos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FSemilla.jpg?alt=media&token=213612b0-a91d-4018-8d3d-e8f484b8e903')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                            <div className="fondoBox">
                            <div className="TextoBox">Intercambio de <br /> semillas</div>
                                <div className="masBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/que-hacemos/alquiler-del-espacio">
                        <div className="boxQueHacemos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FCartel.jpg?alt=media&token=6f764c97-9116-44b7-93b0-35d7ff5803fc')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                            <div className="fondoBox">
                                <div className="TextoBox">Alquiler del espacio</div>
                                <div className="masBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/que-hacemos/talleres-charlas">
                        <div className="boxQueHacemos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qu%C3%A9%20hacemos%2FTaller.jpg?alt=media&token=76e6461a-3cd7-4ab6-a59a-012e0491c1bf')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                            <div className="fondoBox">
                            <div className="TextoBox">Talleres / Charlas</div>
                                <div className="masBox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
export default QueHacemos
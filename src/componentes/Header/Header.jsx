import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const handelMenuMobile = (valor) => {
        setMobile(valor)
    }
    return (
        <>
            <header>
                <div className="container divHeader">
                    <div className='divLogo'>
                        <Link to="/" onClick={()=> {handelMenuMobile(false)}}><img src="https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Logo%20sin%20bajada.png?alt=media&token=79c62982-232b-4f83-9620-ef4b6fc8fe83" alt="" width={"150px"} /></Link>
                    </div>
                    <nav>
                        <div className="menuMobile">
                            {
                                mobile ? 
                                <span onClick={()=> {handelMenuMobile(false)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>  
                                </span>
                                :
                                <span onClick={()=> {handelMenuMobile(true)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </span>
                            }
                        </div>
                        <ul className={mobile ? 'divNavbar active' : 'divNavbar'}>
                            <li><Link className='divNavbarTexto'to="/quienes-somos" onClick={()=> {handelMenuMobile(false)}}>Quiénes somos</Link></li>
                            <li><Link className='divNavbarTexto'to="/que-hacemos" onClick={()=> {handelMenuMobile(false)}}>Qué hacemos</Link></li>
                            <li><Link className='divNavbarTexto'to="/ecogranja" onClick={()=> {handelMenuMobile(false)}}>Ecogranja</Link></li>
                            <li><Link className='divNavbarTexto'to="/voluntariado" onClick={()=> {handelMenuMobile(false)}}>Voluntariado</Link></li>
                            <li><Link className='divNavbarTexto'to="/contactanos" onClick={()=> {handelMenuMobile(false)}}>Contactános</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header
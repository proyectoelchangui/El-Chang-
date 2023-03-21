import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container divHeader">
                <div className='divLogo'>
                    <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Logo%20sin%20bajada.png?alt=media&token=79c62982-232b-4f83-9620-ef4b6fc8fe83" alt="" width={"100px"} /></Link>
                </div>
                <nav>
                    <ul className='divNavbar'>
                        <li><Link className='divNavbarTexto'to="/quienes-somos">Quiénes somos</Link></li>
                        <li><Link className='divNavbarTexto'to="/que-hacemos">Qué hacemos</Link></li>
                        <li><Link className='divNavbarTexto'to="/ecogranja">Ecogranja</Link></li>
                        <li><Link className='divNavbarTexto'to="/voluntariado">Voluntariado</Link></li>
                        <li><Link className='divNavbarTexto'to="/contactanos">Contactános</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header
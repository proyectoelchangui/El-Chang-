import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../imagenes/Logo.png'


const Header = () => {
    return (
        <header>
            <div className="container divHeader">
                <div className='divLogo'>
                    <img src={Logo} alt="" width={"100px"} />
                </div>
                <nav>
                    <ul className='divNavbar'>
                        <li><Link className='divNavbarTexto'to="/quienes-somos">Quiénes somos</Link></li>
                        <li><Link className='divNavbarTexto'to="/que-hacemos">Qué hacemos</Link></li>
                        <li><Link className='divNavbarTexto'to="/ecogranjas">Ecogranja</Link></li>
                        <li><Link className='divNavbarTexto'to="/voluntariado">Voluntariado</Link></li>
                        <li><Link className='divNavbarTexto'to="/contactanos">Contactános</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header
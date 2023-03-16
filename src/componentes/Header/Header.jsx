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
                        <li><Link className='divNavbarTexto'to="/">Quiénes somos</Link></li>
                        <li><Link className='divNavbarTexto'to="/">Qué hacemos</Link></li>
                        <li><Link className='divNavbarTexto'to="/">Ecogranja</Link></li>
                        <li><Link className='divNavbarTexto'to="/">Voluntariado</Link></li>
                        <li><Link className='divNavbarTexto'to="/">Contactános</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header
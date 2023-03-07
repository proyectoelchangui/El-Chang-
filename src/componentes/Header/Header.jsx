import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return(
        <div className='divHeader'>
        <div className='container'>
            <div className='divLogo'>
                <p className=''>el changui</p>
            </div>
            <nav className='divNavbar'>
                <ul>
                    <li><Link to="/">Quiénes somos</Link></li>
                    <li><Link to="/">Qué hacemos</Link></li>
                    <li><Link to="/">Ecogranja</Link></li>
                    <li><Link to="/">Voluntariado</Link></li>
                    <li><Link to="/">Contactános</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    );
}
export default Header
import './Footer.css'
import Logo from '../../imagenes/Logo.png'

const Footer = () => {
    return (
        <>
            <div className='DivFooter'>

                <div className='divFooterizq'>
                    <img src={Logo} alt="" width={"100px"} />
                    <p className='footerTexto'>Apoyamos y creemos en una producción local libre de veneno.</p>
                    <p className='footerTexto'>2023 El Changüí . Todos los derechos reservados.</p>
                </div>

                <div className='divFooterDer'>
                    <div className='divRedes'>
                        <p className='footerTexto'>Seguinos en las redes</p>
                        <div>
                            <p className='footerTexto'> Facebook</p>
                            <p className='footerTexto'>instagram</p>
                        </div>
                    </div>
                    <div className='divRedes'>
                        <p className='footerTexto'>Contactanos</p>
                        <div>
                            <p className='footerTexto'> whatsapp</p>
                        </div>
                    </div>
                    <div className='divRedes'>
                        <p className='footerTexto'>Visitanos</p>
                        <div>
                            <p className='footerTexto'> Ruta Nacional N° 7 - KM  776,5.Juana Koslay.San Luis, Argentina</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
import './Home.css';

const Home = () => {
    return(
        <>
        <div className='holaquetal'>
            <div className="hola">
                <p className='texto'>Conectá con la naturaleza</p>
            </div>
            <div className='divFoto'>
                <img  className='foto' src='#' alt='' />
            </div>
        </div>
        <div className="inicioAgroecologia">
            <div className='divAgroecologia'>
                <div className='divAgroeco'>
                    <h2 className='agroeco'>¿Qué es la agroecología?</h2>
                </div>
                <div className='divFoto'>
                    <div>
                        <img className='foto' src='#' alt=''/>
                    </div>
                    <div>
                        <p className='texto'></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;
import './Home.css';
import InicioNaturaleza from './InicioNaturaleza/InicioNaturaleza';
import InicioAgroecologia from './InicioAgroecologia/InicioAgroecologia';
import InicioVideo from './InicioVideo/InicioVideo';
import InicioFotosDatos from './InicioFotosDatos/InicioFotosDatos';



const Home = () => {
    return(
        <>
        <div className="container">
            <InicioNaturaleza></InicioNaturaleza>
            <InicioAgroecologia></InicioAgroecologia>
            <InicioVideo></InicioVideo>
            <InicioFotosDatos></InicioFotosDatos>
        </div>
        </>
    );
}
export default Home;
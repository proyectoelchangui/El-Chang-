import './Home.css';
import InicioNaturaleza from './InicioNaturaleza/InicioNaturaleza';
import InicioAgroecologia from './InicioAgroecologia/InicioAgroecologia';
import InicioVideo from './InicioVideo/InicioVideo';
import InicioFotosDatos from './InicioFotosDatos/InicioFotosDatos';
import Carousel from '../page/carousel-template/Carousel';



const Home = () => {
    const arrayCarousel = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FAtardecer.jpg?alt=media&token=e2bf1300-b989-4203-a4d1-d973f9b73f1d',
            position: 'left'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FDesde%20arriba.jpg?alt=media&token=e92a67d8-1e37-451f-81cb-b71d82e85b50',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FPaisaje.jpg?alt=media&token=799cf2fb-35f0-4016-9d99-3c0d789f36d2',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FPrimavera.jpg?alt=media&token=e85dd27e-2ed2-4622-9ae4-3d7a48cd5850',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FCaballos.jpg?alt=media&token=930162e0-ffe2-4ad8-bb06-e65508abc453',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FOvejas.jpg?alt=media&token=b581af9f-7331-4220-845e-6591c62540e2',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FVerdura.jpg?alt=media&token=bacd691d-a279-4724-b7b1-a1996790441a',
            position: 'center'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FPlantines.jpg?alt=media&token=d549539b-e07e-4b1d-9341-5df4c2539637',
            position: 'center'
        }
    ]
    return(
        <>
        <div className="container">
            <InicioNaturaleza></InicioNaturaleza>
            <InicioAgroecologia></InicioAgroecologia>
            <InicioVideo></InicioVideo>
            <InicioFotosDatos></InicioFotosDatos>
        </div>
        <Carousel arrayCarousel={arrayCarousel} titulo={'El Changüí en imágenes'}/>
        </>
    );
}
export default Home;
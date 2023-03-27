import './InicioFotosDatos.css'
import { useState } from 'react'


const InicioFotosDatos = () => {


    const [modal, setModal] = useState({})
    const handleOpenModal = (item) => {
        setModal(item)
    }
    console.log(modal);
    const arrayModal = [
        {
            id: 1,
            titulo: '¿Por qué debemos cuidar <br /> y mejorar nuestro suelo?',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FSuelo.jpg?alt=media&token=49db0e21-14a4-44c1-91ad-c45a2624805b',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>Los suelos, según la mirada convencional, se utilizan únicamente como soporte de plantas y animales, vertiendo en el, grandes cantidades de insumos químicos, dejándolo así estéril, sin presencia de vida.</li>
                    <li className='EventoTexto'>Esto es un grave error, ya que poseen otras funciones además de sostén. Son refugio de millones de microrganismos como hongos, bacterias e insectos claves para que el suelo siga latiendo y entregando nutrientes, oxigeno, agua y protegiendo a las plantas. Actuemos por un suelo vivo y sano.</li>
                </ul>
            `
        },
        {
            id: 2,
            titulo: 'Compost, la tendencia que <br /> ayuda al medio ambiente',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FCompost.webp?alt=media&token=4e7f4810-7266-4351-adbf-600b96fe9a45',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>El compost, es  un proceso donde gracias a microorganismos del suelo junto con la temperatura, el agua y el oxigeno se descomponen los residuos orgánicos obteniendo como producto final un sustrato muy rico en nutrientes conocido como tierra negra.</li>
                    <li className='EventoTexto'>Esta técnica, es significativa como medio alternativo de generación de sustratos para un suelo fértil, al tiempo que permite reducir el impacto ambiental con menos residuos urbanos, que son el 50% de los generados por cada persona.</li>
                </ul>
            `
        },
        {
            id: 3,
            titulo: 'La importancia de la <br /> educación ambiental para las <br /> juventudes',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FEducaci%C3%B3n%20a%20juventudes.jpg?alt=media&token=aadd785e-a62d-4cd7-b1d8-1472404e688a',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>Los niños, niñas y adolescentes son los menos responsables del cambio climático, sin embargo, serán quienes más sufrirán sus consecuencias.</li>
                    <li className='EventoTexto'>La educación ambiental, es una poderosa herramienta para generar un cambio de paradigma y crear conciencia, enfrentar los retos del cambio climático y lograr un cambio de comportamiento sistemático y duradero.</li>
                </ul>
            `
        },
        {
            id: 4,
            titulo: '¿Qué son los huevos <br /> de gallinas libres?',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FHuevos.jpg?alt=media&token=fd6e6826-b69f-4ba8-ae94-79af66d830f2',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>Es un método de producción respetuosa hacia las gallinas, las cuales están libres, en contacto con la naturaleza la mayor parte del día, a diferencia de la producción convencional, donde viven las 24 horas en jaulas.</li>
                    <li className='EventoTexto'>Tampoco se las fuerza a que produzcan, como pasa habitualmente, con luz o temperatura. Se respeta sus ciclos, sabiendo que en las épocas de otoño e invierno donde las temperaturas son bajas y los días cortos, dejan de poner.</li>
                </ul>
            `
        },
        {
            id: 5,
            titulo: '¿Por qué consumir productos <br /> agroecólogicos?',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FTomates.jpg?alt=media&token=7a0734d3-3ecc-4993-990a-7a8d1f97f6f7',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>Los productos agroecológicos no contienen químicos, pesticidas ni aditivos sintéticos.</li>
                    <li className='EventoTexto'>Tienen más vitaminas, minerales y antioxidantes.</li>
                    <li className='EventoTexto'>Su aroma, sabor y color están llenos de vida y son de mejor calidad.</li>
                    <li className='EventoTexto'>Protegen la salud del consumidor y del agricultor.</li>
                    <li className='EventoTexto'>Ayudan a prevenir el calentamiento global y apoyan la biodiversidad.</li>
                </ul>
            `
        },
        {
            id: 6,
            titulo: 'Cómo tu participación activa <br /> puede ayudar a la preservación <br /> y protección del planeta.',
            img: 'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FParticipaci%C3%B3n%20activa.jpg?alt=media&token=cf80be23-8c7e-4d60-bd77-c3899ab14ae7',
            descripcion: `
                <ul className='divEventoTexto'>
                    <li className='EventoTexto'>A través de los voluntariados, se trabaja con la consigna de cuidar el medio ambiente, con más amor y respeto.</li>
                    <li className='EventoTexto'>El objetivo principal, es modificar el vínculo con la pachamama: reducir la contaminación, respetar a los animales, y evitar cualquier tipo de práctica que pueda influir en los entornos naturales.</li>
                    <li className='EventoTexto'>Se busca disminuir el impacto negativo sobre el medio ambiente.</li>
                </ul>
            `
        }
    ]
    return (
        <>
            <div className='text-center'>
                <h2 className='InicioVideoTexto'>Datos de interés</h2>
            </div>
            <div className='gridFotosDatos row'>
                {
                    arrayModal.map(item =>(
                        <div className="col-6 mb-4" key={item.id} onClick={()=> {handleOpenModal(item)}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="fotosDatosFoto" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <div className='fotosDatosDivTexto'>
                                    <div className='fotosDatosTexto' dangerouslySetInnerHTML={{ __html: item.titulo }}></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center" id="exampleModalLabel" dangerouslySetInnerHTML={{ __html: modal.titulo }}></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" dangerouslySetInnerHTML={{ __html: modal.descripcion }}>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default InicioFotosDatos;
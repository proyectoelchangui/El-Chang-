import './InicioAgroecologia.css'

const InicioAgroecologia = () => {
    return (
        <>
            <div className='divAgroecologia'>
                <div className='divTitulo'>
                    <h2 className='Titulo'>¿Qué es la agroecología?</h2>
                </div>
                <div className='div'>
                    <div className='divFotoDuraznos'>
                        <img className='fotoDuraznos' src="https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FDuraznos.jpg?alt=media&token=c0dfb429-5b89-4951-ad4f-032f5031b01d" alt="" />
                    </div>
                    <div className='divTextoAgroecologia'>
                        <p className='textoAgroecologia'>La agroecología es un enfoque holístico e integrado que aplica simultáneamente conceptos y principios ecológicos y sociales al diseño y la gestión de sistemas agrícolas y alimentarios sostenibles.</p>
                        <p className='textoAgroecologia'>Trata de optimizar las interacciones entre las plantas, los animales, los seres humanos y el medio ambiente, al mismo tiempo que aborda la necesidad de sistemas alimentarios socialmente equitativos en los que las personas puedan elegir lo que comen, cómo y dónde se produce.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default InicioAgroecologia;
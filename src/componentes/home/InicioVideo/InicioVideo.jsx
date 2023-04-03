import './InicioVideo.css'

const InicioVideo = () => {
    return (
        <>
            <div>
                <div className='text-center'>
                    <h2 className='InicioVideoTexto'>Nuestro espacio, naturaleza al alcance de todos</h2>
                </div>
                    <div className='divInicioVideo'>
                        <video loop autoPlay muted controls className='inicioVideo' src="https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Inicio%2FVideo.mp4?alt=media&token=b4ea9273-0da9-4b32-b8ab-1396114dff98" alt="" ></video>
                </div>
            </div>
        </>
    );
}
export default InicioVideo;
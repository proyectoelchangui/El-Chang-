import './TemplateCabezal.css'

const TemplateCabezal = ({titulo, img}) => {
    return (
        <>
            <div className='divNaturaleza'>
                <div className="divTexto">
                    <p className='texto'>{titulo}</p>
                </div>
                <div className='divFoto'>
                    <img className='Foto' src={img} alt="" />
                </div>
            </div>
        </>
    );
}
export default TemplateCabezal;
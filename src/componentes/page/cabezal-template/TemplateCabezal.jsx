import './TemplateCabezal.css'

const TemplateCabezal = ({titulo, img, position}) => {
    return (
        <>
            <div className='divNaturaleza'>
                <div className="divTexto">
                    <p className='texto'>{titulo}</p>
                </div>
                <div className='divFoto'>
                    <img className='Foto' src={img} alt="" style={{objectPosition: `${position}`}} />
                </div>
            </div>
        </>
    );
}
export default TemplateCabezal;
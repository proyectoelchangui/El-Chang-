import TemplateCabezal from "../cabezal-template/TemplateCabezal";
import './Voluntariado.css'

const Voluntariado = () => {
    return (
        <>
            <div className="container">

                <TemplateCabezal titulo={'Voluntariado'} img={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2Fgrupo.jpg?alt=media&token=9c873cbb-ae50-4b32-ab23-21d5ac84bcea'} />

                {/* primer foto y texto Voluntariado  */}

                <div className="containerColorVoluntariado">
                    <div className="divColorVoluntariado">
                        <div className="divFotoIzqVoluntariado">
                            <img className="fotoIzqVoluntariado" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FSonriendo.jpg?alt=media&token=24391595-5dc4-40a6-9422-f033341b4e7f'} alt="" />

                        </div>
                        <div className="divTextoDerVoluntariado">
                            <div className="divFlexTextoVoluntariado">
                                <p className="textoDerVoluntariado">Para la familia del Changüí, las personas voluntarias,  son seres que llegan, comparten sus saberes, tiempo y cuerpo vital, para que nuestro proyecto se siga nutriendo de otras energías al mismo tiempo que lo  impulsan para que continúe creciendo y perpetuándose en el tiempo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* titulo Valores de nuestras personas voluntarias  */}

                <div className="divTituloVoluntariado">
                    <h2 className="tituloVoluntariado">Valores de nuestras personas voluntarias</h2>
                </div>

                {/* segunada foto y texto Voluntariado  */}

                <div className="containerValoresVoluntariado">
                    <div className="divFlexValoresVoluntariado">
                        <div className="divTextoIzqValoresVoluntariado">
                            <div className="divColorValoresTextoVoluntariado divColorTextoIzqValoresVoluntariado">
                                <p className="valoresTextoVoluntariado textoValoresVoluntariado">Compromiso <br /> Solidaridad <br /> Empatía <br /> Honestidad</p>
                            </div>
                        </div>
                        <div className="divFlexFotoDerValoresVoluntariado">
                            <div className="divColorFotoDerValoresVoluntariado">
                                <img className="FotoDerValoresVoluntariado" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FReunidos.jpg?alt=media&token=e960d5e9-1257-4186-9c86-548dce6d8c2a'} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* titulo y texto ¿Te gustaría formar parte del Voluntariado?  */}

                <div className="divTituloVoluntariado">
                    <h2 className="tituloVoluntariado">¿Te gustaría formar parte del Voluntariado?</h2>
                </div>

                <div className="divTextoVoluntariado">
                    <h2 className="TextoVoluntariado">Como nos encanta compartir lo que venimos aprendiendo de la pacha, como también recibir saberes de otras personas, te traemos 2 propuestas:</h2>
                </div>

                {/* 2 fotos y texto de la propuesta  */}

                <div className="containerPropuestaVoluntariado">
                    <div className="divFlexPropuestaVoluntariado">
                        <div className="divTextoIzqPropuestaVoluntariado">
                            <h2 className="TextoIzqPropuestaVoluntariado">La persona decide convivir en El Changüí por un plazo no menor a 10 días.</h2>
                            <p>Se intercambian 5 horas de trabajo (lunes a sábado) a cambio de :</p>
                            <ul className='divListaPropuestaVoluntariado'>
                                <li className='ListaPropuestaVoluntariado'>Capacitaciones de temas referidos al Espacio Agroecológico.</li>
                                <li className='ListaPropuestaVoluntariado'>Las 4 comidas principales.</li>
                                <li className='ListaPropuestaVoluntariado'>Alojamiento en casa.</li>
                                <p> Si no hubiera disponibilidad, se brinda un espacio para instalar carpa.</p>
                                <li className='ListaPropuestaVoluntariado'>1 día libre (domingo).</li>
                            </ul>
                        </div>
                        <div className="divFotoDerPropuestaVoluntariado">
                            <img className="fotoDerPropuestaVoluntariado" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FCharla.jpg?alt=media&token=45279d45-420e-4c3b-9265-f72d610d4d7f'} alt="" />
                        </div>
                    </div>
                </div>

                <div className="containerPropuestaVoluntariado">
                    <div className="divFlexPropuestaVoluntariado">
                        <div className="divTextoIzqPropuestaVoluntariado">
                            <h2 className="TextoIzqPropuestaVoluntariado">La persona asiste en los días y horarios establecidos con los referentes del lugar.</h2>
                            <p>Se intercambian 4 horas de trabajo a cambio de :</p>
                            <ul className='divListaPropuestaVoluntariado'>
                                <li className='ListaPropuestaVoluntariado'>Saberes y capacitación de las actividades que se van realizando en el día.</li>
                                <li className='ListaPropuestaVoluntariado'>2 comidas según horario designado.</li>
                            </ul>
                        </div>
                        <div className="divFotoDerPropuestaVoluntariado">
                            <img className="fotoDerPropuestaVoluntariado" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FLimpiando.jpg?alt=media&token=3344e886-e172-477a-b86a-7887e9e9d60c'} alt="" />
                        </div>
                    </div>
                </div>

                {/* titulo y texto ¡Importante!  */}

                <div className="containerImportanteVoluntariado">
                    <div className="divImportanteVoluntariado">
                        <h2>¡Importante!</h2>
                        <p>No se requiere experiencia previa, solo muchas ganas de meter mano en la tierra</p>
                    </div>
                </div>

                {/* titulo y texto ¿Qué actividades realizarás?  */}

                <div>
                    <h2>¿Qué actividades realizarás?</h2>
                </div>

                <div className="divTextoVoluntariado">
                    <h2 className="TextoVoluntariado">Las mismas dependen de la estación del año, y las prioridades que requiera El Changüí</h2>
                </div>

                {/* foto Plantines  */}

                <div className="holaquetal">
                    <img className="holaquetalfoto" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FPlantines.jpg?alt=media&token=4f831e35-a3dc-4380-9bc2-146d8c0a25d0'} alt="" />
                </div>

                {/* titulo y texto Proponemos tareas de diferente intensidad. */}

                <div className="divTextoVoluntariado">
                    <h2 className="TextoVoluntariado">Proponemos tareas de diferente intensidad.</h2>
                </div>

                <div className="divTextoVoluntariado">
                    <h2 className="TextoVoluntariado">La diversidad del espacio, propone algunas físicas, otras mentales o artísticas. Tenés la libertad de elegir las que más te gusten para efectuar durante el voluntariado.</h2>
                </div>

                {/* tercera foto y texto  Voluntariado */}

                <div className="containerPropuestaVoluntariado">
                    <div className="divFlexPropuestaVoluntariado">
                        <div className="divFotoDerPropuestaVoluntariado">
                            <img className="fotoDerPropuestaVoluntariado" src={'https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Voluntariado%2FBarnizando.jpg?alt=media&token=bab3a88f-5b92-42d7-8a53-f838af274240'} alt="" />
                        </div>
                        <div className="divTextoIzqPropuestaVoluntariado">
                            <h2 className="TextoIzqPropuestaVoluntariado">Estos son solo algunos de los muchos labores que podrás llevar a cabo:</h2>
                            <ul className='divListaPropuestaVoluntariado'>
                                <li className='ListaPropuestaVoluntariado'>Realizar y barnizar estructuras de madera para armar o mejorar corrales.</li>
                                <li className='ListaPropuestaVoluntariado'>Podar árboles frutales, plantas aromáticas, ornamentales y nativas del monte.</li>
                                <li className='ListaPropuestaVoluntariado'>Desmalezar la huerta para luego abonar y sembrar.</li>
                                <li className='ListaPropuestaVoluntariado'>Armar y barnizar cartelería.</li>
                                <li className='ListaPropuestaVoluntariado'>Limpiar senderos.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* tiulo contactanos */}

                <div className="divTextoVoluntariado">
                    <h2 className="TextoVoluntariado">Si te interesa saber más de nuestra propuesta de Voluntariado,  contactanos</h2>
                </div>

            </div>



        </>
    );
}
export default Voluntariado;
import TemplateCabezal from "../cabezal-template/TemplateCabezal";
import './QuienesSomos.css'

const QuinenesSomos = () => {
    return (
        <>
            <TemplateCabezal titulo={'Quiénes somos'} img={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FEsteban.jpg?alt=media&token=78710575-0a32-46b8-814f-d459201e1f92"} position={'right'}/>
            <div className="container">
                {/* primer foto y texto quienes somos */}

                <div className="primerContainerQuinesSomos">
                    <div className="divQuinesSomosFotoIzq">
                        <div className="divQuinesSomosFoto">
                            <img className="QuinesSomosFoto" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FPapas.jpg?alt=media&token=0dfd6b17-4256-47fe-b0c5-754b26e03c9f"} alt="" />
                        </div>
                    </div>
                    
                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoArribaFotoPapa">El Changüí, es un espacio agroecológico de experimentación, aprendizaje y difusión de saberes de la tierra que nos conectan con la pacha y con nuestras raíces.</p>
                            <p className="QuinesSomosTextoAbajoFotoPapa">También nos dedicamos a la obtención de productos agroecológicos que se extraen directamente de la tierra, utilizando todo tipo de prácticas que estén en armonía con el ambiente que nos rodea.</p>
                        </div>
                    </div>
                </div>

                <div className="containerQuinesSomos">
                    <div className="divQuinesSomosFotoIzq">
                        <div className="divQuinesSomosFoto">
                            <img className="QuinesSomosFoto" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FPoda.jpg?alt=media&token=b621777f-11af-468e-b80b-e4d9d7ccb2f9"} alt="" />
                        </div>
                    </div>

                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoFotoPoda">Este espacio,  arrancó a mediados del año 2017 y gracias al granito de arena de muchas personas, que difundiendo, participando de talleres, colaborando en la organización de eventos o voluntariando, ayudaron a que El Changüí crezca dentro de la comunidad y sea lo que es hoy.</p>
                        </div>
                    </div>
                </div>

                {/* titulo y container soñadores del Changüí   */}

                <div className="divQuinesSomosTitulo">
                    <h2 className="quinesSomosTitulo">Los soñadores del Changüí</h2>
                </div>

                <div className="containerQuinesSomosSoñadores">

                    <div className="divQuinesSomosSoñadores">

                        <div className="divQuinesSomosSoñadoresTextoIzq">

                            <div className="divQuinesSomosTexto">
                                <p className="QuinesSomosSoñadores">Somos un grupo de personas apasionadas por el cuidado de la pacha.</p>
                                <p className="QuinesSomosSoñadores">Comenzamos a diseñar y meter mano en la tierra en el año 2017, dos idealistas, Nahuel y Esteban, nos conocimos y rápidamente volcamos juntos un sueño en común: tener un lugar en donde poder sembrar y cosechar nuestras verduras libres de venenos.</p>
                            </div>
                        </div>

                        <div className="divQuinesSomosSoñadoresTextoDer">
                            <div className="divQuinesSomosFotoSoñadores">
                                <img className="QuinesSomosSoñadoresFoto1" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FHuerta%20Esteban.jpg?alt=media&token=5ab7fdce-128a-4c1c-9f13-b1ae00febb44"} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="divQuinesSomosSoñadores">

                        <div className="divQuinesSomosSoñadoresTextoIzq">

                            <div className="divQuinesSomosTexto">
                                <p className="QuinesSomosSoñadores">Iniciando el 2018 , el compañero Nahuel suelta el proyecto con el fin de poder viajar y conocer otros lugares en contacto con la naturaleza.</p>
                                <p className="QuinesSomosSoñadores">Con el correr del tiempo se fueron sumandos otros amigos a lo largo de estos años de caminar junto al Changüí.</p>
                            </div>
                        </div>

                        <div className="divQuinesSomosSoñadoresTextoDer">
                            <div className="divQuinesSomosFotoSoñadores">
                                <img className="QuinesSomosSoñadoresFoto2" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FNahuel%20fundador.jpg?alt=media&token=d912aaa9-9222-430e-bff5-4a5422787a67"} alt="" />
                            </div>
                        </div>

                    </div>

                </div>

                {/* 2 fotos izquierda y texto  */}

                <div className="divQuinesSomos2">
                    <div className="divQuinesSomosFotoIzquierda">
                        <div className="divQuinesSomosFotoIzqSelfie">
                            <img className="QuinesSomosFotos" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FLu%20y%20Jose.jpg?alt=media&token=20ff3f84-d9bc-4f9c-aa58-d108106e6bf2"} alt="" />
                        </div>
                    </div>

                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoFotoPoda">Jose y Lu, personas muy queridas,  quienes fueron un gran motor para que el espacio siga creciendo y sumando objetivos a lograr:</p>
                            <p className="QuinesSomosTextoFotoPoda">Producir alimentos agroecológicos para autoconsumo y vender el excedente a la comunidad.</p>
                        </div>
                    </div>
                </div>

                <div className="divQuinesSomos2">
                    <div className="divQuinesSomosFotoIzquierda">
                        <div className="divQuinesSomosFotoIzqSelfie">
                            <img className="QuinesSomosFotos" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FIntercambio%20de%20saberes.jpg?alt=media&token=7721d485-45d9-456f-9ab2-6596a7846157"} alt="" />
                        </div>
                    </div>

                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoAbajoFotoPapa">Una vez establecida la huerta y observando al ecosistema lo más estable posible, se inició el dictado de talleres, capacitaciones, mingas y hasta intercambios de semillas y saberes.</p>
                        </div>
                    </div>
                </div>

                {/* 2 fotos derecha y texto  */}

                <div className="divQuinesSomos2">

                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoAbajoFotoPapa">A partir del 2022 decidimos avanzar un paso más e integrar a la familia del Changüí animalitos de granja: gallinas, patos, ovejas y muchos otros, con el fin de aprovechar principalmente sus heces para brindarle estructura y nutrientes al suelo.</p>
                        </div>
                    </div>

                    <div className="divQuinesSomosFotoIzquierda">
                        <div className="divQuinesSomosFotoDerecha">
                            <img className="QuinesSomosFotoDer" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FOveja.jpg?alt=media&token=b268736c-a5c7-4062-a6b3-63b397a790e7"} alt="" />
                        </div>
                    </div>

                </div>

                <div className="divQuinesSomos2">

                    <div className="divQuinesSomosTextoDer">
                        <div className="divQuinesSomosTexto">
                            <p className="QuinesSomosTextoAbajoFotoPapa">Esta meta no se hubiera podido lograr sin la ayuda de muchas personas, en especial Juan y Cristian, que eligieron acompañarnos en este lindo desafío.</p>
                        </div>
                    </div>
                    <div className="divQuinesSomosFotoIzquierda">
                        <div className="divQuinesSomosFotoDerecha">
                            <img className="QuinesSomosFotoDer" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FJuan.jpeg?alt=media&token=61af9d3c-697e-4493-bf9b-afeaad39399d"} alt="" />
                        </div>
                    </div>

                </div>

                {/* 2 fotos y texto en el medio  */}

                <div className="containerQuinesSomosAnimales">
                    <div className="divQuinesSomosAnimales">
                        <img className="FotoIzqQuinesSomosAnimales" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FPatitos.jpg?alt=media&token=e49bcf7a-e555-4ce7-b13c-c77712724b0c"} alt="" />

                    </div>
                    <div className="divQuinesSomosAnimalesTexto">
                        <p className="QuinesSomosAnimalesTexto ">Este es nuestro espacio, <br /> donde animales y plantas tratan de <br /> vivir en completa armonía.</p>

                    </div>
                    <div className="divQuinesSomosAnimales">
                        <img className="FotoDerQuinesSomosAnimales" src={"https://firebasestorage.googleapis.com/v0/b/el-changui.appspot.com/o/Qui%C3%A9nes%20somos%2FGallina%20y%20pollito.jpg?alt=media&token=88399496-7a43-4468-bf61-201ce4c26f4e"} alt="" />

                    </div>
                </div>

                {/* texto  acompañanos */}

                <div className="divQuinesSomosTituloAcompañanos">
                    <h2 className="quinesSomosTituloAcompañanos">El Changüí, trabaja todos los días para continuar creciendo, acompañanos...</h2>
                </div>

            </div>

        </>
    );
}
export default QuinenesSomos;
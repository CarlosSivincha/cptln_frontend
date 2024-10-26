import { lazy } from "react";
import videotest from '../../../../assets/file.mp4';
import WhiteIcon from "../../../../assets/WhiteIcon.png";

const Header = lazy(() => import("@/pages/client/components/Header"));
const YoutubeEmbed = lazy(() => import("@/pages/client/components/YoutubeEmbed"));

const CursosBiblico = ({ video, titulo = "Dios se revela", descripcion = "Dios se revela es un curso que, haciendo uso de la tecnología y lenguaje modernos, explica la fe cristiana. En él se presenta la obra de salvación de Dios a través de Cristo, los principios fundamentales de la fe cristiana y diversos aspectos prácticos de la fe en la vida del creyente." }) => {
    return (
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28">
            <Header color="bg-l_color_o-600" title="Cursos Bíblicos" />
            <div className="flex md:max-w-[700px] box-content mx-[30px] md:items-center md:mx-auto lg:max-w-[1500px] min-[1580px]:mx-auto lg:mx-[40px] rounded-xl">
                <div className="w-full grid lg:grid-cols-2 grid-cols-1">
                    {/* Sección del video */}
                    <div className="flex flex-col gap-5 lg:py-5 lg:px-8 lg:bg-l_color_o-600 justify-center lg:rounded-l-xl">
                        <span className="block text-center max-md:text-[1.3em] max-lg:text-[1.5em] max-[1110px]:text-[1.7em] text-[1.9em] font-bold leading-[1.25em] lg:text-white">Capítulo 1: ¿Por qué Jesús?</span>
                        <YoutubeEmbed videoId="osg_WmeLxQk"/>
                        
                    </div>

                    {/* Sección de información y capítulos */}
                    <div className="flex flex-col gap-3 bg-white py-4 px-8 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl">
                        {/* Título */}
                        <span className=""/>
                        <div className="text-center">
                            <span className="block h3-subtitles ">Curso "{!titulo ? 'Título' : titulo}"</span>
                        </div>

                        {/* Descripción */}
                        <div className="flex flex-grow">
                            <span className="block standard-paragraph text-justify">{!descripcion ? 'Descripción' : descripcion}</span>
                        </div>

                        <h4 className="block max-md:text-[1.3em] max-lg:text-[1.5em] max-[1110px]:text-[1.7em] text-[1.9em] font-bold leading-[1.25em] xl:text-white">Capítulos de "Dios se revela"</h4>

                        {/* Lista de capítulos */}
                        <ol className="space-y-2 list-decimal standard-paragraph list-inside columns-1 sm:columns-2">
                            {/* Datos de prueba para capítulos */}
                            <li className="">¿Por qué Jesús?</li>
                            <li className="">¿Por qué la Biblia?</li>
                            <li className="">Los diez mandamientos</li>
                            <li className="">La naturaleza de Dios</li>
                            <li className="">La obra de Cristo</li>
                            <li className="">El Espíritu Santo</li>
                            <li className="">La oración</li>
                            <li className="">El Bautismo</li>
                            <li className="">Confesión y absolución</li>
                            <li className="">La Santa Comunión</li>
                            <li className="">El fin de los tiempos</li>
                            <li className="">La vida cristiana</li>
                        </ol>

                        <div className="flex my-2 justify-end">
                            <button className="rounded-md py-2 px-4 bg-l_color_o-400 text-white hover:shadow-md transition-all duration-300">
                                Entrar al curso
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto max-[600px]:w-full flex max-lg:flex-col min-[600px]:mx-[30px] md:w-max-[700px] md:mx-auto lg:mx-[40px] box-content md:items-center min-[1580px]:max-w-[1500px] min-[1580px]:mx-auto min-[1580px]:w-full max-lg:gap-1">
                <div className="flex flex-col justify-center gap-5 px-5 py-5 xl:px-10 max-lg:h-2/5 w-full bg-[#A3723B] text-white lg:text-black lg:bg-white text-center h-auto lg:h-96">
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¡Accede a los cursos llenando el formulario!</p>
                    <p className="font-light text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em] text-justify">Cada uno de los 12 videos contiene una guía de estudio con referencias bíblicas y preguntas de reflexión y discusión. Estas sesiones pueden ser utilizadas en las clases para nuevos miembros o como material de estudio de grupos, dado que a través de ellas ese Dios, que “no escatimó a su propio Hijo, sino que lo entregó por nosotros” (Romanos 6:32a) se revela para que lo conozcamos más y profundicemos así nuestra relación con él.</p>
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¿Estás listo para aprender?</p>
                </div>
                <div className="flex flex-col gap-5 max-lg:h-3/5 h-auto lg:h-96 w-full bg-[#A3723B] px-5 py-5 xl:px-10 justify-center">
                    <img src={WhiteIcon} alt="" className="w-12 self-center my-4"/>
                    <form className="flex flex-col gap-5 w-full " action="" method="">
                        <div className="flex max-md:flex-col gap-5">
                            <input type="text" name="" id="" placeholder="Nombre *" className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                            <input type="text" name="" id="" placeholder="Apellido *" className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                        </div>
                        <input type="email" name="" id="" placeholder="Correo Electrónico *" className="py-1.5 px-2 rounded-lg text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                        {/* <select name="" id="" className="py-1.5 px-2 rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]">
                            <option value="none" selected="selected" className=" text-gray-400">Escoja una categoría</option>
                            <option value="">Vicios</option>
                            <option value="">Alcoholismo</option>
                            <option value="">Drogas</option>
                            <option value="">Depresión</option>
                            <option value="">Ansiedad</option>
                        </select> */}
                        <button type="submit" className="w-28 h-auto py-2 bg-l_color_v-600 text-white shadow-lg rounded-lg self-center text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"> Enviar</button>                  
                        
                    </form>
                </div>
                
            </div> 
        </div>
    );
};

export default CursosBiblico;
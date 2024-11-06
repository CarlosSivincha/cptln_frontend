import { lazy, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import imgjoel1 from '../../../../assets/Joel_2.jpg'
import imgjoel2 from '../../../../assets/Joel_3.jpg'
import imgNoticia from '../../../../assets/Día_del_Nino_3.jpg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewsCard from "../../components/NewsCard";
import { obtenerInfoProgramaContenido } from "@/Api/programas";
import { obtenerNoticiasPrograma } from "@/Api/noticias";

const NewsLoader = lazy(() => import("@/pages/client/components/Loaders/NewsLoader.jsx"));

import ImageNotFound from "@/assets/image_not_found.jpg";

const Header = lazy(() => import("@/pages/client/components/Header"));

const ProgramSelect = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const { categoria, programa } = useParams();
    const [programaInfo, setProgramaInfo] = useState([]);

    const [contenidoPrograma, setContenidoPrograma] = useState([]);
    const [loadingProgramaInfo, setLoadingProgramaInfo] = useState(true);

    const [noticias, setNoticias] = useState([])
    const [isLoadingNoticias, setIsLoadingNoticias] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchProgramas = async () => {
            try {
                if (programa) {
                    const formData = new FormData();
                    formData.append("nombre", programa);
                    const response = await obtenerInfoProgramaContenido(formData);
                    setProgramaInfo(response.data);
                    console.log(response.data)
                    setContenidoPrograma(response.data.contenido)
                    setLoadingProgramaInfo(false);
                }
            } catch (error) {
                //console.error("Error fetching programas:", error);
                setLoadingProgramaInfo(false);
            }
        };
        
        fetchProgramas();
    }, [programa]);

    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerNoticiasPrograma({programa_id: programaInfo._id})
            setNoticias(response.data)
            setIsLoadingNoticias(false)
            console.log(response.data)
        }
        fetch()
    }, [programaInfo])

    

    return (
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24">
            {loadingProgramaInfo ? (
                <Header color={`#C3C3C3`} title="Cargando..." />
            ) : programaInfo ? (
                <Header 
                    color={programaInfo.color} 
                    title={programaInfo.titulo} 
                />
            ) : (
                <Header color="#C3C3C3" title="Programa no encontrada" />
            )}
            {/* <Header color="bg-l_color_y-700" title={programaInfo.titulo}/> */}
            {/* flex justify-between max-md:flex-col gap-10 max-w-[1280px] box-content px-10 max-[600px]:px-[30px] md:items-center md:mx-auto */}
            <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24 px-10 max-[600px]:px-[30px] md:items-center md:mx-auto max-w-[1280px]">
                {
                    !loadingProgramaInfo && contenidoPrograma && contenidoPrograma.map((contenido, index) => (

                        <div className="flex justify-between max-md:flex-col gap-10 box-content md:items-center" key={index}>
                            <div className={`flex-1 max-w-[498px] max-md:w-full max-md:max-w-full max-md:flex max-md:justify-center ${index%2 == 1 ? " order-2 max-md:order-1" : ""}`}>
                                {
                                    contenido.imagen ? (
                                        <img src={contenido.imagen} alt=""
                                        className="bg-cover 2xl:h-80 xl:h-64 md:h-54 max-md:w-full rounded-2xl shadow-md shadow-gray-400" />
                                        //bg-cover w-full rounded-2xl
                                    ) : (
                                        <img src={ImageNotFound} alt=""
                                        className="bg-cover 2xl:h-80 xl:h-64 md:h-54 max-md:w-full rounded-2xl shadow-md shadow-gray-400" />
                                        //bg-cover w-full rounded-2xl
                                    )
                                }
                                
                            </div>
                            <div className="flex-1">
                                <h3 className={`h3-subtitles ${index%2 == 1 ? "order-1 max-md:order-2" : ""}`}>{contenido.subtitulo}</h3>
                                <p className="mt-[15px] standard-paragraph text-[#555656] text-justify" dangerouslySetInnerHTML={{ __html: contenido.parrafo}}>
                                    
                                </p>
                            </div>
                        </div>
                    ))
                }
                
                {/* <div className="flex justify-between max-md:flex-col gap-10 box-content md:items-center">
                    <div className="flex-1 max-w-[498px] max-md:w-full max-md:max-w-full max-md:flex max-md:justify-center">
                        <img src={imgjoel2} alt=""
                            className="bg-cover 2xl:h-80 xl:h-64 md:h-54 max-md:w-full rounded-2xl shadow-md shadow-gray-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="h3-subtitles">¿Qué es Joel?</h3>
                        <p className="mt-[15px] standard-paragraph text-[#555656] text-justify">
                        Jóvenes con Espíritu libre busca promover prácticas saludables, prevención integral y valores en Instituciones Educativas para fomentar una ciudadanía activa y responsable en niños, adolescentes, jóvenes y familias comprometidas. El fin de este programa se centra en la enseñanza que los niños llevan a su casa y que guardan en sus corazones.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between max-md:flex-col gap-10 box-content md:items-center">
                    <div className="flex-1 max-w-[498px] max-md:w-full max-md:max-w-full max-md:flex max-md:justify-center order-2 max-md:order-1">
                        <img src={imgjoel1} alt=""
                            className="bg-cover 2xl:h-80 xl:h-64 md:h-54 max-md:w-full rounded-2xl shadow-md shadow-gray-400" />
                    </div>
                    <div className="flex-1 order-1 max-md:order-2">
                        <h3 className="h3-subtitles">¿Cómo de organiza?</h3>
                        <p className="mt-[15px] standard-paragraph text-[#555656] text-justify">
                        Cada lección está específicamente orientada a las diferentes clases, clasificadas por edades, con las que la Institución educativa cuenta tomando de referencia el nivel cognitivo de los alumnos tanto como su desarrollo emocional y social.
                        </p>
                    </div>
                </div> */}
                
            </div>
            <div className="px-10 max-[600px]:px-[30px] md:px-[50px] lg:px-[80px] 2xl:mx-auto max-w-[1580px] w-full">
                <h3 className="h3-subtitles mb-6">Eventos pasados de {programaInfo.abreviatura}</h3>
                <div className="grid grid-cols-1 w-full">

                    <Slider {...settings} className="w-full">
                        {/* <NewsCard
                            imageSrc={imgNoticia}
                            title={'Noticia 1'}
                            date={'15 Agosto, 2024'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'} />
                         */}

                        {isLoadingNoticias // Mientras está cargando, muestra los skeletons
                            ? Array(6) // Crear 6 skeletons como placeholders
                                .fill()
                                .map((_, index) => (
                                    <NewsLoader key={index}/>
                                    // loading={true} activa los skeletons
                                ))
                            : noticias.map((not, index) => (
                                <NewsCard
                                    key={not._id}
                                    title={not.titulo}
                                    date={not.fecha}
                                    description={not.cuerpo}
                                    link={not._id}
                                    imageSrc={not.portada}
                                    loading={false} // loading={false} oculta los skeletons
                                />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    )
}
export default ProgramSelect
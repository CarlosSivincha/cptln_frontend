import { lazy, useState, useEffect } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));
const AudioPlayer = lazy(() => import("@/pages/client/components/AudioPlayer"))
const Devocionales = lazy(() => import("@/pages/client/components/Devocionales"));
const DevocionalLoader = lazy(() => import("@/pages/client/components/Loaders/DevocionalLoader.jsx"));

import { obtenerDevocionalHoy, obtenerDevocional, obtenerDevocionalID } from "@/Api/devocionales";
import { useParams, useNavigate } from "react-router-dom";

const Devocional = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [infoDevocional, setInfoDevocional] = useState("")
    const [isInfoDevocioalLoader, setInfoDevocionalLoader] = useState(true);
    const [fetchDevocionales, setFetchDevocionales] = useState([])
    const [isDevocionalLoading, setDevocionalLoading] = useState(true);

    useEffect(() => {
        const fetchProgramas = async () => {
            try {
                if (!id) {
                    const response = await obtenerDevocionalHoy()
                    setInfoDevocional(response.data)
                    setInfoDevocionalLoader(false)
                } else {
                    const response = await obtenerDevocionalID(id)
                    setInfoDevocional(response.data)
                    setInfoDevocionalLoader(false)
                }
                
                
            } catch (error) {
                // console.error("Error fetching programas:", error);
                setInfoDevocionalLoader(false)
            }
        };
        
        fetchProgramas();
    }, []);

    useEffect(() => {
        const fetchDevocional = async () =>{
            const response = await obtenerDevocional()
            setFetchDevocionales(response.data)
            setDevocionalLoading(false)
        }
        fetchDevocional()
    }, [])

    return (
        <div className="flex flex-col gap-6 lg:gap-12 xl:gap-16 pb-4 lg:pb-8 xl:pb-16 items-center">
            <Header color="bg-l_color_y-600" title={'Devocional Diario'} />
            <div className="xl:mx-56 lg:mx-40 md:mx-10 max-md:mx-5 my-10">
                <h3 className="h3-subtitles">{infoDevocional.titulo}</h3>
                <p className="flex text-gray-500 italic my-5 text-xl xl:text-2xl break-all ">
                    {`Lectura: ${infoDevocional.versiculo}`}
                </p>

                <div className="flex w-full p my-2">
                    <span className="flex w-full border border-black" />
                </div>
                <div className="">
                    <div className="float-end ml-10 mb-5 md:w-1/2 lg:w-1/3 max-md:w-full ">
                        <img src={infoDevocional.imagenURL} alt=""
                            className="mb-2" />
                        <AudioPlayer audio={infoDevocional.audioURL}/>
                    </div>
                    <p className="standard-paragraph text-justify break-all" dangerouslySetInnerHTML={{ __html: infoDevocional.parrafo}}></p>
                </div>
                <div className="flex w-full my-10">
                    <span className="flex w-full border border-black" />
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="h3-subtitles max-[400px]:max-w-[200px]">Últimos devocionales</h2>
                        <a href="/recursos/devocionales">
                        <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">
                            Ver todo
                        </button>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 w-full place-items-center">
                    {/* <DevocionalLoader/>
                    <DevocionalLoader/>
                    <DevocionalLoader/> */}
                    {isDevocionalLoading // Mientras está cargando, muestra los skeletons
                        ? Array(6) // Crear 6 skeletons como placeholders
                            .fill()
                            .map((_, index) => (
                                <DevocionalLoader key={index} /> // loading={true} activa los skeletons
                            ))
                        : fetchDevocionales.map((devocional, index) => (
                            <a className="w-full" href={`/recursos/devocional/${devocional._id}`}>
                            <Devocionales key={devocional._id} title={devocional.titulo} fecha={devocional.fecha} versiculo={devocional.versiculo}/>
                            </a>
                    ))}
                    
                    
    {/*                     
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <div className="2xl:hidden">
                        <Devocionales/>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Devocional
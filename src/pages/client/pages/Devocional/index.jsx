import { lazy } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));
const AudioPlayer = lazy(() => import("@/pages/client/components/AudioPlayer"))
const Devocionales = lazy(() => import("@/pages/client/components/Devocionales"));
const DevocionalLoader = lazy(() => import("@/pages/client/components/Loaders/DevocionalLoader.jsx"));

const Devocional = ({
    title,
    fecha,
    versiculo,
    contenido
}) => {

    return (
        <div className="flex flex-col gap-6 lg:gap-12 xl:gap-16 pb-4 lg:pb-8 xl:pb-16 items-center">
            <Header color="bg-l_color_y-600" title={'Devocional Diario'} />
            <div className="xl:mx-56 lg:mx-40 md:mx-10 max-md:mx-5 my-10">
                <h3 className="h3-subtitles">{title}</h3>
                <p className="flex text-gray-500 italic my-5 text-xl xl:text-2xl">
                    {`Lectura: ${versiculo}`}
                </p>

                <div className="flex w-full p my-2">
                    <span className="flex w-full border border-black" />
                </div>
                <div className="">
                    <div className="float-end ml-10 mb-5 md:w-1/2 lg:w-1/3 max-md:w-full ">
                        <img src="https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/12/alaaa.jpg" alt=""
                            className="mb-2" />
                        <AudioPlayer />
                    </div>
                    <p className="standard-paragraph text-justify whitespace-pre-line">{contenido}</p>
                </div>
                <div className="flex w-full my-10">
                    <span className="flex w-full border border-black" />
                </div>
                <div>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="h3-subtitles max-[400px]:max-w-[200px]">Devocionales Pasados</h2>
                    <a href="/recursos/devocionales">
                    <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">
                        Ver todo
                    </button>
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 w-full place-items-center">
                <DevocionalLoader/>
                <DevocionalLoader/>
                <DevocionalLoader/>
                
                
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
import { lazy } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));
const AudioPlayer = lazy(() => import("@/pages/client/components/AudioPlayer"))
const Devocionales = lazy(() => import("@/pages/client/components/Devocionales"));
const DevocionalLoader = lazy(() => import("@/pages/client/components/Loaders/DevocionalLoader.jsx"));

const Devocional = ({
    title = `Sabiduría del cielo`,
    fecha = "17 de septiembre de 2024",
    versiculo = `"Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17)`,
    contenido = `
        La sociedad se ha beneficiado mucho de la tecnología. Recientemente, la posibilidad de realizar transacciones bancarias instantáneas ha aportado una practicidad increíble. Sin embargo, lo que sería algo para ayudar se ha convertido en un tremendo dolor de cabeza para muchas personas. Numerosos estafadores se aprovechan de esta facilidad para robar dinero de personas de buena fe, que no están atentas o no son conscientes de los peligros de ser engañados. Se puede decir que estos estafadores poseen una "sabiduría maliciosa", lo cual es reprobable.

A pesar de que, si alguien nunca comete una estafa así, somos culpables de la estafa más grande de todas: querer dejar de ser la criatura de Dios para tomar su lugar en el control de todo. La desobediencia a la voluntad divina es algo impregnado en nosotros. No somos capaces de amar al prójimo como nos amamos a nosotros mismos, ni de amar a Dios sobre todas las cosas.

Para deshacer este golpe causado por nuestro pecado, Dios, en su misericordia, envió a su Hijo Jesús a morir por nuestra maldad. Quien se arrepiente y cree esto recibe de Dios un cambio de pensamiento, guiado por su propio Espíritu Santo. Nos enseña "Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17). Así que, ante las tentaciones que surjan, dejemos que Dios actúe en nuestras vidas. En Cristo, tenemos la sabiduría de la nueva vida y entendemos que lo más importante es buscar primero el Reino de Dios.

Oremos: 🙏 Padre Amado, ayúdame a hacer tu voluntad, que siempre será lo mejor para mí. Por Jesús, mi Salvador. Amén. 

Autor: Aramis Jacoby
    `
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
import { lazy } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));
const AudioPlayer = lazy(() => import("@/pages/client/components/AudioPlayer"))

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
        <>
            <Header color="bg-l_color_y-600" title={'Devocional Diario'} />
            <div className="my-10 xl:mx-52 lg:mx-40 md:mx-10 max-md:mx-5">
                <h3 className="h3-subtitles">{title}</h3>
                <p className="flex my-5 text-2xl italic text-gray-500">
                    {`Lectura: ${versiculo}`}
                </p>

                <div className="flex w-full my-2 p">
                    <span className="flex w-full border border-black" />
                </div>
                <div className="">
                    <div className="mb-5 ml-5 float-end md:w-1/2 lg:w-1/3 max-md:w-full ">
                        <img src="https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/12/alaaa.jpg" alt=""
                            className="mb-2" />
                        <AudioPlayer />
                    </div>
                    <p className="text-justify whitespace-pre-line standard-paragraph">{contenido}</p>
                </div>
                <div className="flex w-full my-10">
                    <span className="flex w-full border border-black" />
                </div>
                <div>
                    <div className="my-5">
                        <span className="text-2xl font-bold">Devocionales anteriores</span>
                    </div>
                    <div className="flex w-full space-x-10">
                        <div className="flex flex-col bg-white border rounded-md shadow-lg max-sm:w-full sm:w-1/2 lg:w-1/3">
                            <span className="flex w-full h-3 rounded-t-md bg-[#908A42]"></span>
                            <span className="flex w-full px-2 mt-2 text-xl font-bold">Sabiduría del cielo</span>
                            <p className="flex-grow p-2 text-lg italic text-gray-500">
                            "Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17)
                            </p>
                            <span className="flex justify-end w-full pb-2 pr-2 font-bold">Julio 13, 2024</span>
                        </div>
                        <div className="flex flex-col bg-white border rounded-md shadow-lg max-sm:hidden sm:w-1/2 lg:w-1/3">
                            <span className="flex w-full h-3 rounded-t-md bg-[#908A42]"></span>
                            <span className="flex w-full px-2 mt-2 text-xl font-bold">Sabiduría del cielo</span>
                            <p className="flex-grow p-2 text-lg italic text-gray-500">
                            "Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17)
                            </p>
                            <span className="flex justify-end w-full pb-2 pr-2 font-bold">Julio 13, 2024</span>
                        </div>
                        <div className="flex flex-col bg-white border rounded-md shadow-lg max-lg:hidden lg:w-1/3">
                            <span className="flex w-full h-3 rounded-t-md bg-[#908A42]"></span>
                            <span className="flex w-full px-2 mt-2 text-xl font-bold">Sabiduría del cielo</span>
                            <p className="flex-grow p-2 text-lg italic text-gray-500">
                            "Pero la sabiduría que viene de lo alto es, ante todo, pura, y además pacífica, amable, benigna, llena de compasión y de buenos frutos, ecuánime y genuina" (Santiago 3:17)
                            </p>
                            <span className="flex justify-end w-full pb-2 pr-2 font-bold">Julio 13, 2024</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Devocional
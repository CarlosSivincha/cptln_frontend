import { lazy } from "react";
const Header = lazy(() => import("@/pages/client/components/Header"));
const EbookCard = lazy(() => import("./components/EbookCard"));
import image22 from "../../../../assets/image22.png";
import WhiteIcon from "../../../../assets/WhiteIcon.png";
import EbooksHeader from "../../../../assets/EbooksHeader.png";

export const Ebooks = () => {
    return(
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28 items-center">
            <Header color="bg-l_color_v-600" title="Nuestros Ebooks"/>
            {/* <div className="bg-l_color_o-600 h-96 w-full m-auto flex justify-center items-center">
                <div className="bg-white w-72 h-72 p-10 rounded-full text-center flex items-center">
                    <p className="font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em]">Contamos con una variedad de materiales gratuitos que podrán ayudarte con los desafíos de la actualidad. <br/> <br/>¡Te invitamos a que los descargues!</p>
                </div>
            </div> */}
            <div className="flex w-full justify-center box-content lg:max-w-[900px] 2xl:max-w-[1300px] mx-auto">
                {/* <div className="bg-white w-72 max-md:hidden rounded-full"></div> */}
                <div className="bg-l_color_v-var max-lg:w-72 max-lg:h-72 p-10 rounded-l-2xl max-sm:rounded-full text-center flex items-center lg:w-2/5">
                    <p className="font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-white">Contamos con una variedad de materiales gratuitos que podrán ayudarte con los desafíos de la actualidad. <br/> <br/>¡Te invitamos a que los descargues!</p>
                </div>
                <img
                    src={EbooksHeader}
                    alt="Imagen"
                    className="object-cover max-lg:w-72 rounded-r-2xl max-sm:hidden lg:w-3/5"
                />
            </div>
            
            <div className="2xl:max-w-[1300px] 2xl:w-full grid gap-x-10 gap-y-10 min-[710px]:gap-x-16 min-[710px]:gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 2xl:px-auto">
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Ansiedad" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                <EbookCard titulo="Miedos" img={image22}/>
                
            </div>

            <div className="h-auto max-[600px]:w-full flex max-lg:flex-col min-[600px]:mx-[30px] md:w-max-[700px] md:mx-auto lg:mx-[40px] box-content md:items-center min-[1580px]:max-w-[1500px] min-[1580px]:mx-auto min-[1580px]:w-full max-lg:gap-1">
                <div className="flex flex-col justify-center gap-5 px-5 py-5 xl:px-10 max-lg:h-2/5 w-full bg-[#A3723B] text-white lg:text-black lg:bg-white text-center h-auto lg:h-96">
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¡Aquí puedes descargar todos los Ebooks que quieras!</p>
                    <p className="font-light text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em] ">Completa este simple formulario y accede a todos los ebooks de nuestra librería digital</p>
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¿Estás listo para comenzar?</p>
                </div>
                <div className="flex flex-col gap-5 max-lg:h-3/5 h-auto lg:h-96 w-full bg-[#A3723B] px-5 py-5 xl:px-10 justify-center">
                    <img src={WhiteIcon} alt="" className="w-12 self-center my-4"/>
                    <form className="flex flex-col gap-5 w-full " action="" method="post">
                        <div className="flex max-md:flex-col gap-5">
                            <input type="text" name="" id="" placeholder="Nombre *" className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                            <input type="text" name="" id="" placeholder="Apellido *" className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                        </div>
                        <input type="email" name="" id="" placeholder="Correo Electrónico *" className="py-1.5 px-2 rounded-lg text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"/>
                        <select name="" id="" className="py-1.5 px-2 rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]">
                            <option value="none" selected="selected" className=" text-gray-400">Escoja una categoría</option>
                            <option value="">Vicios</option>
                            <option value="">Alcoholismo</option>
                            <option value="">Drogas</option>
                            <option value="">Depresión</option>
                            <option value="">Ansiedad</option>
                        </select>
                        <button type="submit" className="w-28 h-auto py-2 bg-l_color_v-600 text-white shadow-lg rounded-lg self-center text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]"> Enviar</button>                  
                        
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Ebooks;
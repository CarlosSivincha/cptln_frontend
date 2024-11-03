import { lazy } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));

export const CreciendoEnFamilia = () => {

    return(
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24">
            <Header color="bg-l_color_v-600" title="Creciendo en Familia"/>
            <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24">
                <p className="standard-paragraph mx-10 sm:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px]">En relación a la familia, CPTLN promueve dos programas que nos hablan de temas importantes a tratar en familia, podemos encontrar material de soporte para saber como actuar en diferentes situaciones, así como un acompañamiento virtual que se mantiene con una persona del equipo que está atenta a los mensajes que llegan a estas páginas. <br/> <br/> Vivenciar y Lugar de Fe son don herramientas que te brindarán opciones para enfrentar las dificultades que estés atravesando desde un enfoque bíblico con la intención de brindar esperanza a través de la interacción que logran con las personas, buscan ofrecer una nueva perspectiva a la vida por medio de la fe cristiana. </p>
            
            </div>
        </div>
    );
}

export default CreciendoEnFamilia
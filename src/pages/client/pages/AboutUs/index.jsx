import { lazy } from "react";
import GroupImage from "../../../../assets/GroupImage.jpg";
import GlobalMap from "../../../../assets/GlobalMap.png";

const Header = lazy(() => import("@/pages/client/components/Header"));

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28 ">
      <Header color="bg-l_color_r-600" title="¿Quienes Somos?"/>
      <div className="flex justify-between max-md:flex-col gap-10 max-w-[1280px] box-content px-10 max-[600px]:px-[30px] md:items-center md:mx-auto">
        <div className="flex-1 max-w-[498px] max-md:w-full max-md:max-w-full max-md:flex max-md:justify-center">
          <img
            src={GroupImage}
            alt="Imagen"
            className="bg-cover w-full rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-[#222126]">¿Qué es CPTLN?</h3>
          <p className="mt-[15px] font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-[#555656]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolasdbasbdksbdore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerciasdsdtation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Dusfis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="h-auto flex flex-col gap-5 lg:gap-10">
        <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-center text-[#27262c]">Nuestro Alcance Mundial</h3>
        <div className="bg-[#49252A] p-0">
          {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
          <img src={GlobalMap} alt="global-map" className="h-40 min-[460px]:h-full w-full object-cover" /> 
        </div>
      </div>
      <div className="flex justify-between max-xl:flex-col gap-10 max-w-[1280px] xl:m-auto px-10 box-content">
        <div className="flex-1 h-auto border-4 border-[#46797A] rounded-2xl flex flex-col items-center  gap-3 px-5 py-8 lg:m-auto lg:max-w-4xl xl:px-10 xl:h-[420px]">
          <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-[#222126] max-xl:justify-center xl:h-1/5 xl:mt-5">Misión</h3>
          <p className="mt-[15px] font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-[#555656] text-justify xl:h-4/5">
          Nos comprometemos a llevar a Cristo a las naciones y atraerlas a la Iglesia. Utilizando diversos medios de comunicación para difundir el mensaje transformador de las Buenas Nuevas de la Palabra de Dios. Buscando inspirar, educar y conectar a las personas con la vida cristiana, promoviendo valores que contribuyan al bienestar social y al desarrollo humano.
          </p>
        </div>
        <div className="flex-1 h-auto border-4 border-[#49252A] rounded-2xl flex flex-col items-center justify-center gap-3 px-5 py-8 lg:m-auto lg:max-w-4xl xl:px-10 xl:h-[420px]">
          <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-[#222126] max-xl:justify-center xl:h-1/5 xl:mt-5">Visión</h3>
          <p className="mt-[15px] font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-[#555656] text-justify xl:h-4/5">
          Ser un faro de esperanza y amor, irradiando la luz de Cristo en cada rincón de Perú. Logrando ser una organización que transforma vidas al ofrecer un espacio acogedor para que todos, sin importar su trasfondo, encuentren el amor redentor y la salvación en Cristo Jesús.
          </p>
        </div>
      </div>
      
      <div className="h-auto flex flex-col gap-5 xl:w-[1280px] xl:m-auto px-10 box-content">
        <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-[#222126]">Equipo de Trabajo</h3>
        <ul className="mt-[15px] font-normal text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-[#555656] list-disc px-8">
          <li>Veruzka Farfán - veruzka.farfan@cptln.pe</li>
          <li>Paola</li>
          <li>Daniela</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

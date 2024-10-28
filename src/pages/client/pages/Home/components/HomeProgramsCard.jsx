import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Joel from "../../../../../assets/Día_del_Nino_1.jpg"

export const HomeProgramsCard = ({ program }) => {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState('');
  const [imagenList, setImagenList] = useState([]);

  useEffect(() => {
    setImagenList(program.imagenes)
    if (imagenList) {
      const img = imagenList.find((img) => img.estado);

      if (img) {
        setImagen(img.ruta);
        // console.log(img.ruta)
      }
    }
  }, [imagenList]); // Dependencia de useEffect

  const sendToProgram = (link) => {
    navigate(link);
  };

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-[10px] lg:h-72 xl:h-80 2xl:h-96 cursor-pointer "
      onClick={() => sendToProgram(program.link)}
    >

      <img src={program.imagenes[0].ruta} alt="Imagen" className="w-full h-full object-cover bg-center hover:scale-105 transition-all duration-500"/>
      {
        // console.log(program.imagenes)
      }
      <div
        className={`absolute bottom-0 left-0 flex flex-col items-center justify-center p-2 text-white  w-full max-md:rounded-b-[10px] md:rounded-bl-lg md:rounded-tr-lg md:w-2/5 md:py-3 xl:py-4 2xl:py-6`}
        style={{
          backgroundColor : program.color,
        }}
      >
        <span className="text-sm xl:text-base">{program.categoria}</span>
        <span className="text-base xl:text-xl font-bold">{program.titulo}</span>
      </div>
    </div>
  );
};

export default HomeProgramsCard;

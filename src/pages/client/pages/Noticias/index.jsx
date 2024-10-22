import { lazy } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = lazy(() => import("@/pages/client/components/Header"));
import Image1 from "../../../../assets/Día_del_Nino_1.jpg";
import Image2 from "../../../../assets/Día_del_Nino_2.jpg";
import Image3 from "../../../../assets/Día_del_Nino_3.jpg";

import { dataNoticiaUnica } from "../../../../api/Noticias";
import { dataEventos } from "../../../../api/Eventos";

import data from "../../data.json";

const EventCard = lazy(() => import("@/pages/client/components/EventCard"));

export const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState([]);
  const [ fetchEventos, setFetchEventos ] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await dataNoticiaUnica(id)
      // console.log(response)
      setNoticia(response.data)
      console.log(response.data)
    }
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    
    fetch();
    const fetchEvent = async () => {
      const response = await dataEventos()
      // console.log(response)
      setFetchEventos(response.data)
      
    }
    fetchEvent();
    return () => clearTimeout(timer);
  }, [id]);

  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html
    .replace(/<\/p>/gi, "\n") // Reemplaza las etiquetas de cierre </p> con un salto de línea
    .replace(/<p[^>]*>/gi, "\n") // Reemplaza las etiquetas de apertura <p> con un salto de línea
    .replace(/<\/?[^>]+(>|$)/g, ""); // Elimina cualquier otra etiqueta HTML

    // let text = html
    // .replace(/<\/p>/gi, "\n") // Cierra los párrafos con un salto de línea
    // .replace(/<p[^>]*>/gi, "\n"); // Abre los párrafos con un salto de línea

    // // Reemplaza <strong> o <b> con "**" para el texto en negrita (Markdown style)
    // text = text
    //   .replace(/<(strong|b)>/gi, "**")
    //   .replace(/<\/(strong|b)>/gi, "**");

    // // Manejar listas ordenadas <ol> y desordenadas <ul>
    // let listIndex = 0;
    // text = text
    //   .replace(/<ol[^>]*>/gi, () => { listIndex = 0; return "\n"; }) // Inicia lista ordenada
    //   .replace(/<\/ol>/gi, "\n") // Termina lista ordenada
    //   .replace(/<ul[^>]*>/gi, "\n") // Inicia lista desordenada
    //   .replace(/<\/ul>/gi, "\n") // Termina lista desordenada
    //   .replace(/<li[^>]*>/gi, () => { listIndex += 1; return `${listIndex}. `; }) // Cada elemento de <li> en <ol> es un número
    //   .replace(/<\/li>/gi, "\n") // Termina un elemento de la lista

    //   // Para listas desordenadas, reemplazamos con un guión "-" en lugar de un número
    //   .replace(/<ul[^>]*>/gi, "\n")
    //   .replace(/<li[^>]*>/gi, "- ")
    //   .replace(/<\/li>/gi, "\n");

    // // Elimina cualquier otra etiqueta HTML
    // text = text.replace(/<\/?[^>]+(>|$)/g, "");// Elimina cualquier otra etiqueta HTML

    // return text
  };

  if (!noticia) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28">
      <div className="relative h-[45vh] min-h-[300px]">
        {/* Imagen de fondo */}
        <img
          src={noticia.portada}
          alt="Header background"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        />
        {/* Filtro oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Contenido del Header */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
          <Header
            color="bg-transparent"
            title={noticia.titulo}
            text={noticia.fecha}
            return
            returnText="Noticias"
            linkReturn="/noticias-y-eventos"
          />
        </div>
      </div>

      {/* <div dangerouslySetInnerHTML={{__html: noticia.cuerpo}}></div> */}

      <div className="flex max-2xl:flex-col mx-5 sm:mx-10 md:mx-20 lg:mx-24 min-[1110px]:max-w-[1100px] min-[1110px]:mx-10 min-[1210px]:mx-auto gap-10 2xl:gap-20 2xl:max-w-[1450px] 2xl:mx-16 min-[1600px]:mx-auto">
        <div className="flex flex-col gap-10 2xl:w-8/12">
          <p className="standard-paragraph whitespace-pre-line">{stripHtmlTags(noticia.cuerpo)}</p>
          {
            loading && noticia.imagenes && Array.isArray(noticia.imagenes) && noticia.imagenes.map((link, index) => (
              <img key={index} src={link} className="xl:w-[70%] self-center" alt={`imagen-${index}`} />
            ))
          }
          {/* <img src={Image1} className="xl:w-[70%] self-center" alt="" /> */}
          {/* <img src={Image2} className="xl:w-[70%] self-center" alt="" />
          <img src={Image3} className="xl:w-[70%] self-center" alt="" /> */}
        </div>
        <div className="2xl:w-4/12">
          <h3 className="h3-subtitles mb-5">Eventos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4 xl:gap-8 2xl:gap-6 place-items-center">
            {fetchEventos.map((event) => (
              <EventCard
                date={event.fecha}
                hora={event.hora}
                title={event.titulo}
                description={event.cuerpo}
                location={event.ubicacion}
              />
            ))}
            {/* {fetchEventos.map((event) => (
              <EventCard
                date={event.fecha}
                title={event.titulo}
                description={event.descripcion}
                location={event.location}
              />
            ))} */}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Noticia;

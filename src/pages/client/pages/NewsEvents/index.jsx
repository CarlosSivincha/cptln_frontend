import { lazy, useEffect, useState } from "react";
import ImagenNoticia1 from "../../../../assets/img_N_card.png";
// import {NewsLoader} from "../../components/Loaders/NewsLoader"

import { dataNoticias } from "../../../../api/Noticias.js";
import { dataEventos } from "../../../../api/Eventos.js";

import data from "../../data.json"

const Header = lazy(() => import("@/pages/client/components/Header"));
const NewsCard = lazy(() => import("@/pages/client/components/NewsCard"));
const EventCard = lazy(() => import("@/pages/client/components/EventCard"));
const NewsLoader = lazy(() => import("@/pages/client/components/Loaders/NewsLoader.jsx"));
const EventsLoader = lazy(() => import("@/pages/client/components/Loaders/EventsLoader.jsx"));

export const NewsEvents = () => {

  const [ fetchNoticias, setFetchNoticias ] = useState([])
  const [ fetchEventos, setFetchEventos ] = useState([])
  const [isLoadingNews, setIsLoadingNews] = useState(true); // Nuevo estado de carga
  const [isLoadingEvents, setIsLoadingEventes] = useState(true); // Nuevo estado de carga

  useEffect(() => {  
    const fetch = async () => {
      const response = await dataNoticias()
      // console.log(response)
      setFetchNoticias(response.data)
      setIsLoadingNews(false);
    }
    fetch();
    const fetchEvent = async () => {
      const response = await dataEventos()
      // console.log(response)
      setFetchEventos(response.data)
      setIsLoadingEventes(false);
    }
    fetchEvent();
  }, []);

  return (
    <div className="flex flex-col gap-12 lg:gap-16 xl:gap-28 pb-12 lg:pb-16 xl:pb-28">
      <Header color="bg-l_color_o-600" title="Noticias y Eventos" />
      <div className="flex mx-5 sm:mx-10 md:mx-auto lg:mx-10 min-[1110px]:mx-auto min-[1110px]:max-w-[1025px] max-2xl:flex-col gap-10 2xl:gap-12 2xl:max-w-[1880px] 2xl:mx-16 min-[1650px]:mx-auto min-[1650px]:max-w-[1520px]  ">
        <div className="min-[360px]:mx-auto">
          <h3 class="h3-subtitles mb-5">Noticias</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {isLoadingNews // Mientras está cargando, muestra los skeletons
              ? Array(6) // Crear 6 skeletons como placeholders
                  .fill()
                  .map((_, index) => (
                    <NewsLoader key={index} /> // loading={true} activa los skeletons
                  ))
              : fetchNoticias.map((not, index) => (
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
            </div>
        </div>

        <div className=" min-[360px]:mx-auto">
          <h3 className="h3-subtitles mb-5">Eventos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4 xl:gap-8 2xl:gap-6 place-items-center 2xl:max-w-[530px]">
          {isLoadingEvents // Mientras está cargando, muestra los skeletons
              ? Array(3) // Crear 6 skeletons como placeholders
                  .fill()
                  .map((_, index) => (
                    <EventsLoader key={index} /> // loading={true} activa los skeletons
                  ))
              : fetchEventos.map((event, index) => (
                <EventCard
                key={event._id}
                date={event.fecha}
                hora={event.hora}
                title={event.titulo}
                description={event.cuerpo}
                location={event.ubicacion}
              />
                ))}
            {/* <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            />
            <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            />
            <EventCard
              date="ABR 30 2024"
              title="Evento 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              location="Av. Independencia N° 100"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;

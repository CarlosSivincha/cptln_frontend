import { lazy, useEffect, useState } from "react";
import BackgroundHeaderImage from "../../../../assets/img_F_header.png";
import CarruselImage from "../../../../assets/img_P_carrusel.png";
import Slider from "react-slick";
import ImagenNoticia1 from "../../../../assets/img_N_card.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Componentes lazy-loaded
const Header = lazy(() => import("@/pages/client/components/Header"));
const NewsCard = lazy(() => import("@/pages/client/components/NewsCard"));
const EventCard = lazy(() => import("@/pages/client/components/EventCard"));

// Datos de los programas para el carrusel
const programs = [
  { imgSrc: CarruselImage, name: "JOEL" },
  { imgSrc: CarruselImage, name: "PASI" },
  { imgSrc: CarruselImage, name: "VIVENCIAR" }
];

export const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Sección del Header */}
      <div className="relative h-[45vh] min-h-[300px]"> 
        {/* Imagen de fondo */}
        <img
          src={BackgroundHeaderImage}
          alt="Header background"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ objectFit: 'cover' }} 
        />
        {/* Filtro oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Contenido del Header */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <Header
          color="bg-transparent"
          title="CRISTO PARA TODAS LAS NACIONES - PERÚ"
          text="Llevando a Cristo a las Naciones y las Naciones a la Iglesia"
        />
      </div>
      </div>
      {/* Sección de Programas */}
      <div className="container px-2 min-[768px]:px-8 min-[1024px]:px-10 min-[1280px]:px-10 min-[1440px]:px-0 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold">Programas</h2>
          <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">
            Ver todo
          </button>
        </div>

        {/* Carrusel de Programas */}
        <div className="container px-2 min-[768px]:px-8 min-[1024px]:px-10 min-[1280px]:px-10 min-[1440px]:px-8 min-[1920px]:px-20 mx-auto">
          <Slider {...carouselSettings}>
            {programs.map((program, index) => (
              <div key={index} className="relative px-2">
                <div
                  className="relative w-full h-64 overflow-hidden"
                  style={{
                    backgroundImage: `url(${program.imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 flex flex-col items-center justify-center p-2 text-white bg-red-500"
                    style={{
                      width: 'calc(33% - 2rem)',
                      height: '25%',
                      borderRadius: '0 10px 0 0',
                    }}
                  >
                    <span className="text-xs">Niños y Jóvenes</span>
                    <span className="text-sm font-bold">{program.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
{/* Sección de Noticias y Eventos */}
<div className="container px-2 min-[768px]:px-8 min-[1024px]:px-10 min-[1280px]:px-10 min-[1440px]:px-0 mx-auto"> 
  <div className="flex flex-col min-[1280px]:flex-row gap-2">
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-bold">Noticias</h2>
        <button className="px-4 py-1 border rounded border-[#46797A] hover:bg-[#46797A] hover:text-white transition-colors duration-300">
          Ver todo
        </button>
      </div>
      <div className="grid grid-cols-1 min-[505px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-2 min-[1440px]:grid-cols-3 gap-8">
        <NewsCard
          title="Noticia 1"
          date="Julio 30, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          link="#"
          imageSrc={ImagenNoticia1}
        />
        <NewsCard
          title="Noticia 2"
          date="Julio 29, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          link="#"
          imageSrc={ImagenNoticia1}
        />
        <NewsCard
          title="Noticia 2"
          date="Julio 29, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          link="#"
          imageSrc={ImagenNoticia1}
        />
        <NewsCard
          title="Noticia 3"
          date="Julio 28, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          link="#"
          imageSrc={ImagenNoticia1}
        />
      </div>
    </div>

      {/* Columna de Eventos */}
      <div className="mt-10 min-[1280px]:mt-0 min-[1280px]:ml-10 lg:mt-0">
        <h2 className="text-xl font-bold mb-9">Próximos eventos</h2>
        <div className="mt-2 space-y-4">
          <EventCard
            date="ABR 30 2024"
            title="Evento 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Av. Independencia N° 100"
          />
          <EventCard
            date="JUL 11 2024"
            title="Evento 2"
            description="Descripción Descripción"
            location="Av. Independencia N° 100"
          />
          <EventCard
            date="AGTO 03 2024"
            title="Evento 3"
            description="Descripción Descripción"
            location="Av. Independencia N° 100"
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Home;
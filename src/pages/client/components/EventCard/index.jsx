/* eslint-disable react/prop-types */
// src/pages/client/components/EventCard/index.jsx

const EventCard = ({ date, title, description, location, hora }) => {
  // Convertir la cadena a un objeto Date
  const dateFormat = new Date(date)

  // Obtener las partes individuales de la fecha
  const dia = dateFormat.getDate() // Día (14)
  const anio = dateFormat.getFullYear() // Año (2024)

  // Meses abreviados en inglés
  const shortMonthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  // Obtener el nombre abreviado del mes
  const mes = shortMonthNames[dateFormat.getMonth()] // OCT

  // Asignar el resultado completo a una sola variable
  const formattedDate = `${mes} ${dia} ${anio}`

  const [day, month, year] = formattedDate.split(' ');

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div className="flex overflow-hidden bg-white rounded-lg shadow-md h-[140px] w-full max-w-[5000px]">
      {/* Sección de la fecha (fondo ocupa todo el alto) */}
      <div className="flex flex-col items-center justify-center flex-shrink-0 font-bold text-white bg-[#A25F3E] h-full w-[24%]">
        <div className="text-lg xl:text-xl">{day}</div>
        <div className="text-4xl xl:text-5xl leading-none">{month}</div>
        <div className="text-lg xl:text-xl">{year}</div>
        {/* <div className="text-base xl:text-lg">{hora}</div> */}
      </div>

      {/* Sección de información */}
      <div className="flex items-center justify-between flex-grow min-w-0 p-4 relative">
        <div className="flex-grow">
          <h3 className="mb-1 text-lg font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-1 md:line-clamp-2" dangerouslySetInnerHTML={{ __html: description}}></p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-9 0a9 9 0 119 9 9 9 0 01-9-9z" />
            </svg> */}
            <span className="line-clamp-1">{location}</span>
            
          </div>
        </div>
        <div className="absolute py-1 px-2 md:py-1 md:px-3 bottom-0 right-0 bg-l_color_v-600 text-white font-bold text-xs md:text-base rounded-tl-lg">
          <span>{hora}</span>
        </div>
      </div>
      

      
    </div>
  );
};

// Aquí exportas por defecto el componente EventCard
export default EventCard;

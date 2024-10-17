/* eslint-disable react/prop-types */
// src/pages/client/components/EventCard/index.jsx

const EventCard = ({ date, title, description, location }) => {
  // Suponiendo que el formato de fecha sea algo como "30 Julio 2024"
  const [day, month, year] = date.split(' ');

  return (
    <div 
      className="flex w-full overflow-hidden bg-white rounded-lg shadow-md"
      style={{
        height: '120px',
        minWidth: '290px',  // Reducimos el minWidth para pantallas pequeñas
        maxWidth: '450px',
      }}
    >
      {/* Sección de información */}
      <div className="flex items-center justify-between flex-grow min-w-0 p-4">
        <div className="flex-grow">
          <h3 className="mb-1 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-9 0a9 9 0 119 9 9 9 0 01-9-9z" />
            </svg>
            {location}
          </div>
        </div>
      </div>

      {/* Sección de la fecha (fondo ocupa todo el alto) */}
      <div 
        className="flex flex-col items-center justify-center flex-shrink-0 font-bold text-white"
        style={{
          backgroundColor: '#A25F3E',
          width: '90px',  // Ajustamos el ancho para pantallas pequeñas
          height: '100%',
        }}
      >
        <div className="text-xl">{day}</div>
        <div className="text-5xl leading-none">{month}</div>
        <div className="text-xl">{year}</div>
      </div>
    </div>
  );
};

// Aquí exportas por defecto el componente EventCard
export default EventCard;

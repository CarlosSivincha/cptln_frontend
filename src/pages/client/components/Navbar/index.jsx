import { useState, useEffect } from "react";
import OriginalLogo from "../../../../assets/OriginalLogo.png";
// Importar los iconos de react-icons
import { FaHome, FaUsers, FaBuffer , FaBook, FaNewspaper, FaPhone, FaHeart , FaPrayingHands, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Estado para el submenú de "Programas"
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Estado para el submenú de "Recursos"
  const [timeoutId, setTimeoutId] = useState(null); // Para almacenar el ID del timeout
  const [isHoveringMenu, setIsHoveringMenu] = useState(false); // Estado para saber si el mouse está sobre el menú desplegable
  

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > scrollPosition) {
        setIsHidden(true);
        setIsScrolledUp(false);
      } else {
        setIsHidden(false);
        if (currentPosition > 0) {
          setIsScrolledUp(true);
        } else {
          setIsScrolledUp(false);
        }
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Función para manejar el menú desplegable de "Programas"
  const toggleProgramsMenu = () => {
    if (isResourcesOpen) {
      setIsResourcesOpen(false); // Cerrar Recursos si está abierto
    }
    setIsProgramsOpen((prev) => !prev);
  };

  // Función para manejar el menú desplegable de "Recursos"
  const toggleResourcesMenu = () => {
    if (isProgramsOpen) {
      setIsProgramsOpen(false); // Cerrar Programas si está abierto
    }
    setIsResourcesOpen((prev) => !prev);
  };

  // Función para manejar el mouse al salir de "Programas"
  const handleMouseLeavePrograms = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Limpiar el timeout anterior
    }
    if (!isHoveringMenu) {
      const id = setTimeout(() => {
        setIsProgramsOpen(false); // Cerrar después de 3 segundos
      }, 2500);
      setTimeoutId(id);
    }
  };
  // Función para manejar el mouse al salir de "Recursos"
  const handleMouseLeaveResources = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Limpiar el timeout anterior
    }
    if (!isHoveringMenu) {
      const id = setTimeout(() => {
        setIsResourcesOpen(false); // Cerrar después de 3 segundos
      }, 2500);
      setTimeoutId(id);
    }
  };
// Función para manejar el mouse al salir del menú desplegable
const handleMouseLeaveMenu = () => {
  setIsHoveringMenu(false);
  
  // Limpiar cualquier timeout anterior
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Establecer un nuevo timeout para cerrar el menú
  const id = setTimeout(() => {
    setIsProgramsOpen(false); // Cerrar el menú de Programas
    setIsResourcesOpen(false); // Cerrar el menú de Recursos
  }, 1000); // 1 segundo de delay

  setTimeoutId(id);
};

// Función para manejar el mouse al entrar en el menú desplegable
const handleMouseEnterMenu = () => {
  setIsHoveringMenu(true);
  
  // Limpiar el timeout si el mouse está sobre el menú
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
};

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-transform duration-300 ${
          isHidden ? "-translate-y-full bg-white text-black" : "translate-y-0"
        } ${isScrolledUp ? "bg-white text-black shadow-md py-1" : "bg-logo_color_3-600 text-white py-0"} z-50`}
      >
        <div className="container flex items-center justify-between px-6 pt-6 mx-auto">
          <div className="flex items-center space-x-3">
            <img src={OriginalLogo} alt="Logo" className="h-12" />
            <span className={`font-semibold max-[500px]:text-md min-[500px]:text-xl ${isScrolledUp ? "text-black" : "text-white"}`}>
              CPTL - PERÚ
            </span>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolledUp ? "text-black" : "text-white"}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <ul className="hidden space-x-10 font-bold lg:flex">
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/Home">Inicio</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/conocenos">Conócenos</a>
            </li>

              {/* Menú desplegable de Programas */}
              <li className="relative" onMouseLeave={handleMouseLeavePrograms}>
                <button 
                  onMouseEnter={toggleProgramsMenu}
                  className={`flex items-center space-x-2 focus:outline-none ${isScrolledUp ? "text-black" : "text-white"}`}>
                  <span>Programas</span>
                  <FaChevronDown />
                </button>

                {isProgramsOpen && (
                  <div 
                    className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
                    onMouseEnter={handleMouseEnterMenu} // Mantener el menú abierto si el mouse está sobre él
                    onMouseLeave={handleMouseLeaveMenu} // Usar la función para manejar el mouse al salir
                  >
                    <a href="/servicios/ninos" className="block px-4 py-2 text-black hover:bg-[#dfdfdf]">Niños</a>
                    <a href="/servicios/familia" className="block px-4 py-2 text-black hover:bg-[#dfdfdf]">Familia</a>
                    <a href="/servicios/equipando" className="block px-4 py-2 text-black hover:bg-[#dfdfdf]">Equipando los Santos</a>
                  </div>
                )}
              </li>

            {/* Menú desplegable de Recursos */}
            <li className="relative" onMouseLeave={handleMouseLeaveResources}>
              <button 
                onMouseEnter={toggleResourcesMenu}
                className={`flex items-center space-x-2 focus:outline-none ${isScrolledUp ? "text-black" : "text-white"}`}>
                <span>Recursos</span>
                <FaChevronDown />
              </button>

              {isResourcesOpen && (
                <div 
                  className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
                  onMouseEnter={handleMouseEnterMenu} // Mantener el menú abierto si el mouse está sobre él
                  onMouseLeave={handleMouseLeaveMenu} // Usar la función para manejar el mouse al salir
                >
                  <a href="/recursos/ebooks" className="block px-4 py-2 text-black hover:bg-[#dfdfdf]">Ebooks</a>
                  <a href="/recursos/cursos-biblicos" className="block px-4 py-2 text-black hover:bg-[#dfdfdf]">Cursos Bíblicos</a>
                </div>
              )}
            </li>

            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/noticias-y-eventos">Noticias y Eventos</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/contactanos">Contáctanos</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/donate">Ayúdanos</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/devo">Oración</a>
            </li>

            
          </ul>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 w-full md:w-64 h-full bg-[#dfdfdf] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 focus:outline-none ${isScrolledUp ? "text-gray-800" : "text-gray-600"}`}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaHome />
            <a href="/home" onClick={() => setIsOpen(false)}>Inicio</a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaUsers />
            <a href="/conocenos" onClick={() => setIsOpen(false)}>Conócenos</a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaBuffer />
            <button 
              onClick={() => setIsProgramsOpen(!isProgramsOpen)} // Cambiar estado del submenú
              className="flex items-center"
            >
              Programas <FaChevronDown />
            </button>
          </li>
          
          {/* Submenú de Programas */}
          {isProgramsOpen && (
            <ul className="pl-6 space-y-2">
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/servicios/ninos" onClick={() => setIsOpen(false)}>Niños</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/servicios/familia" onClick={() => setIsOpen(false)}>Familia</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/servicios/equipando" onClick={() => setIsOpen(false)}>Equipando los Santos</a>
              </li>
            </ul>
          )}
          
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaBook />
            <button 
              onClick={() => setIsResourcesOpen(!isResourcesOpen)} // Cambiar estado del submenú
              className="flex items-center"
            >
              Recursos <FaChevronDown/>
            </button>
          </li>

          {/* Submenú de Recursos */}
          {isResourcesOpen && (
            <ul className="pl-6 space-y-2">
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/recursos/ebooks" onClick={() => setIsOpen(false)}>Ebooks</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/recursos/cursos-biblicos" onClick={() => setIsOpen(false)}>Cursos Bíblicos</a>
              </li>
            </ul>
          )}

          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaNewspaper />
            <a href="/noticias-y-eventos" onClick={() => setIsOpen(false)}>Noticias y Eventos</a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaPhone />
            <a href="/contactanos" onClick={() => setIsOpen(false)}>Contáctanos</a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaHeart />
            <a href="/donate" onClick={() => setIsOpen(false)}>Ayúdanos</a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaPrayingHands />
            <a href="/devo" onClick={() => setIsOpen(false)}>Oración</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;

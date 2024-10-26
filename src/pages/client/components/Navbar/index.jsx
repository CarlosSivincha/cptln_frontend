import { useState, useEffect } from "react";
import OriginalLogo from "../../../../assets/OriginalLogo.png";
import {Outlet} from "react-router-dom";
import WhiteIcon from "../../../../assets/WhiteIcon.png";
// Importar los iconos de react-icons
import {
  FaHome,
  FaUsers,
  FaBuffer,
  FaBook,
  FaNewspaper,
  FaPhone,
  FaHeart,
  FaPrayingHands,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Estado para el submenú de "Programas"
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Estado para el submenú de "Recursos"
  const [timeoutId, setTimeoutId] = useState(null); // Para almacenar el ID del timeout
  const [isHoveringMenu, setIsHoveringMenu] = useState(false); // Estado para saber si el mouse está sobre el menú desplegable
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil

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

  const handleMouseEnterPrograms = () => {
    if (isResourcesOpen) {
      setIsResourcesOpen(false);
    }
    clearTimeout(timeoutId);
    setIsProgramsOpen(true);
  };

  const handleMouseLeavePrograms = () => {
    const id = setTimeout(() => {
      setIsProgramsOpen(false);
    }, 1000);
    setTimeoutId(id);
  };

  const handleMouseEnterResources = () => {
    if (isProgramsOpen) {
      setIsProgramsOpen(false);
    }
    clearTimeout(timeoutId);
    setIsResourcesOpen(true);
  };

  const handleMouseLeaveResources = () => {
    const id = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 1000);
    setTimeoutId(id);
  };

  // Función para abrir/cerrar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-transform duration-300 ${
          isHidden ? "-translate-y-full bg-white text-black" : "translate-y-0"
        } ${isScrolledUp ? "bg-white text-black shadow-md py-4" : "bg-logo_color_3-600 text-white py-4"} z-50`}
      >
        {/* ${isScrolledUp ? "py-1" : "py-2"} */}
        <div className={`md:container flex items-center justify-between px-6 mx-auto ${isScrolledUp ? "py-1 xl:py-3" : "py-2 xl:py-6"}`}>
          <a href="/" className="flex items-center space-x-3 cursor-pointer">
            <img src={OriginalLogo} alt="Logo" className="h-12" />
            <span
              className={`font-semibold max-[500px]:text-md min-[500px]:text-xl ${
                isScrolledUp ? "text-black" : "text-white"
              }`}
            >
              CPTL - PERÚ
            </span>
          </a>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                isScrolledUp ? "text-black" : "text-white"
              }`}
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

          <ul className="hidden space-x-10 font-bold lg:flex 2xl:text-[17px]">
          <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/">Inicio</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/aboutus">Conócenos</a>
            </li>

            {/* Menú desplegable de Programas */}
            <li className="relative" onMouseLeave={handleMouseLeavePrograms} onMouseEnter={handleMouseEnterPrograms}>
              <a href="/programas">
              <button
                
                className={`flex items-center space-x-2 focus:outline-none ${
                  isScrolledUp ? "text-black" : "text-white"
                }`}
              >
                <span>Programas</span>
                <FaChevronDown />
              </button>
              </a>

              {isProgramsOpen && (
                <div
                  className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
                >
                  <a
                    href="/programas/niños-adolescentes"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Niños y Adolescentes
                  </a>
                  <a
                    href="/programas/familia"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Familia
                  </a>
                  <a
                    href="/programas/creciendo-en-familia"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Creciendo en Familia
                  </a>
                </div>
              )}
            </li>

            {/* Menú desplegable de Recursos */}
            <li className="relative" onMouseLeave={handleMouseLeaveResources} onMouseEnter={handleMouseEnterResources}>
              <button
                className={`flex items-center space-x-2 focus:outline-none ${
                  isScrolledUp ? "text-black" : "text-white"
                }`}
              >
                <span>Recursos</span>
                <FaChevronDown />
              </button>

              {isResourcesOpen && (
                <div
                  className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
                >
                  <a
                    href="/recursos/ebooks"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Ebooks
                  </a>
                  <a
                    href="/recursos/devocional-diario"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Devocional diario
                  </a>
                  <a
                    href="/recursos/cursos-biblicos"
                    className="block px-4 py-2 text-black hover:bg-[#dfdfdf]"
                  >
                    Cursos Bíblicos
                  </a>
                </div>
              )}
            </li>

            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/noticias-y-eventos">Noticias</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/contactanos">Contáctanos</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/donate">Cómo apoyar</a>
            </li>
            <li className={`hover:text-gray-300 ${isScrolledUp ? "text-black" : "text-white"}`}>
              <a href="/oracion">Oración</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 w-full md:w-72 h-full bg-[#dfdfdf] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 focus:outline-none ${
            isScrolledUp ? "text-gray-800" : "text-gray-600"
          }`}
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

        <ul className="flex flex-col items-start p-4 space-y-5">
          <li className="mt-4 flex items-center space-x-2 text-gray-900 hover:text-gray-500">
            <FaHome />
            <a href="/" onClick={() => setIsOpen(false)}>
              Inicio
            </a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaUsers />
            <a href="/aboutus" onClick={() => setIsOpen(false)}>
              Conócenos
            </a>
          </li>
          <li className="flex w-full items-center justify-between text-gray-800 hover:text-gray-600 cursor-pointer" >
            <div className="flex items-center space-x-2">
              <FaBuffer />
              <a href="/programas">
                Programas
              </a>
            </div>
            <FaChevronDown onClick={() => setIsProgramsOpen(!isProgramsOpen)}/>
          </li>

          {/* Submenú de Programas */}
          {isProgramsOpen && (
            <ul className="pl-6 space-y-2">
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/programas/niños-adolescentes" onClick={() => setIsOpen(false)}>
                  Niños y Adolescentes
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/programas/familia" onClick={() => setIsOpen(false)}>
                  Familia
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/programas/creciendo-en-familia" onClick={() => setIsOpen(false)}>
                  Creciendo en Familia
                </a>
              </li>
            </ul>
          )}

          <li className="flex w-full items-center justify-between text-gray-800 hover:text-gray-600 cursor-pointer" onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
            <div className="flex items-center space-x-2">
              <FaBook />
              <span>
                Recursos
              </span>
            </div>
            <FaChevronDown />
          </li>

          {/* Submenú de Recursos */}
          {isResourcesOpen && (
            <ul className="pl-6 space-y-2">
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/recursos/ebooks" onClick={() => setIsOpen(false)}>
                  Ebooks
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a href="/recursos/devocional-diario" onClick={() => setIsOpen(false)}>
                  Devocional diario
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <a
                  href="/recursos/cursos-biblicos"
                  onClick={() => setIsOpen(false)}
                >
                  Cursos Bíblicos
                </a>
              </li>
            </ul>
          )}

          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaNewspaper />
            <a href="/noticias-y-eventos" onClick={() => setIsOpen(false)}>
              Noticias y Eventos
            </a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaPhone />
            <a href="/contactanos" onClick={() => setIsOpen(false)}>
              Contáctanos
            </a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaHeart />
            <a href="/donate" onClick={() => setIsOpen(false)}>
              Ayúdanos
            </a>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <FaPrayingHands />
            <a href="/oracion" onClick={() => setIsOpen(false)}>
              Oración
            </a>
          </li>
        </ul>
      </div>
      <Outlet/>
      <div className="flex md:flex-col bg-[#222126] text-white justify-center py-10">
            <div className="items-center flex flex-col gap-4">
                <img src={WhiteIcon} alt="qhite-icon" className="w-12 xl:w-16"/>
                <span className="font-light text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.2em]">Cristo para Todas las Naciones - Perú</span>
            </div>
            

        </div>
    </>
  );
};
export default Navbar;

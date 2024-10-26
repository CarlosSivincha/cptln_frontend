import React, { useState } from 'react';
import OriginalLogo from "../../../assets/OriginalLogo.png";
import { Outlet } from "react-router-dom";
import { FaPrayingHands, FaNewspaper, FaCalendarDay, FaObjectGroup} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdCameraFront } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Administracion = () => {
    const [showSubmenu, setShowSubmenu] = useState(false); 
    const [isExpanded, setIsExpanded] = useState(false); // Estado para el tamaño del menú

    // Función que maneja la expansión/contracción del menú y oculta el submenú
    const toggleMenu = () => {
        setIsExpanded(prev => !prev);
        if (isExpanded) setShowSubmenu(false); // Cierra el submenú si el menú se contrae
    };

    return (
        <>
            <nav className="flex items-center justify-between w-full px-40 py-4 bg-l_color_r-600">
                <div className="flex items-center space-x-5">
                    <img src={OriginalLogo} alt="Logo" className="h-12" />
                    <span className="text-xl font-semibold text-white">
                        CPTL - PERÚ
                    </span>
                </div>
                <div className="flex items-center font-bold text-white">
                    Mario Usuario Admin
                </div>
            </nav>
            <div className="flex">
                {/* Menú lateral */}
                <div
                    className={`fixed bottom-0 left-0 transition-all duration-300 z-30 bg-white top-20 ${isExpanded ? 'w-96' : 'w-24'} group`}
                    onMouseEnter={() => setIsExpanded(true)} // Expande el menú al pasar el ratón
                    onMouseLeave={toggleMenu} // Contrae el menú y cierra el submenú al salir
                >
                    <ul>
                        <Link to="/admin" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Eventos
                                </span>
                                <FaCalendarDay className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                        <Link to="/admin/tablanews" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Noticias
                                </span>
                                <FaNewspaper className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                        <Link to="/admin/tabladevocional" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Devocionales
                                </span>
                                <GiOpenBook className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                        <Link to="/admin/tablacategoria" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Categorias
                                </span>
                                <TbCategoryFilled className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                        <Link to="/admin/tablaebooks" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Ebook
                                </span>
                                <ImBooks className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                        {/* <Link to="/admin/tablaebooks" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Portadas
                                </span>
                                <MdCameraFront className="block group-hover:hidden size-8" />
                            </li>
                        </Link> */}
                        
                        {/* Menú desplegable de "Peticiones" */}
                        <Link to="#" className="w-full">
                            <li
                                className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400"
                                onClick={() => setShowSubmenu(prev => !prev)}
                            >
                                <span className="hidden ml-4 text-xl group-hover:inline-flex">
                                    Peticiones <IoIosArrowDown className='mt-1.5 ml-1'/>
                                </span>
                                <IoIosPeople className="block group-hover:hidden size-8" />
                            </li>
                        </Link>

                        {/* Submenú para "Peticiones" */}
                        {showSubmenu && (
                            <ul className="bg-white rounded-md shadow-md">
                                <Link to="/admin/tablaoracion" className="w-full">
                                    <li className="flex items-center justify-start w-full px-4 py-2 transition-all duration-300 cursor-pointer hover:bg-slate-400">
                                        <span className="text-sm text-black">Oraciones</span>
                                    </li>
                                </Link>
                                <Link to="/admin/tabla2" className="w-full">
                                    <li className="flex items-center justify-start w-full px-4 py-2 transition-all duration-300 cursor-pointer hover:bg-slate-400">
                                        <span className="text-sm text-black">Obooks</span>
                                    </li>
                                </Link>
                                <Link to="/admin/tabla3" className="w-full">
                                    <li className="flex items-center justify-start w-full px-4 py-2 transition-all duration-300 cursor-pointer hover:bg-slate-400">
                                        <span className="text-sm text-black">Cursos</span>
                                    </li>
                                </Link>
                            </ul>
                        )}
                        <Link to="/admin/tablaebooks" className="w-full">
                            <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                                <span className="hidden ml-4 text-xl group-hover:inline-block">
                                    Programas
                                </span>
                                <FaObjectGroup className="block group-hover:hidden size-8" />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-col w-full transition-all duration-300 bg-[#EAE9E5] overflow-y-auto h-[calc(100vh-5rem)]">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Administracion;
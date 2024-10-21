import React, { useState } from 'react';
import OriginalLogo from "../../../../assets/OriginalLogo.png";
import { Outlet } from "react-router-dom";
import { MdOutlineEvent } from 'react-icons/md';
import { ImNewspaper } from "react-icons/im";
import { FaPrayingHands } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const Administracion = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);

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
                    Mario Uwu
                </div>
            </nav>
            <div className="flex">
                {/* Menú lateral */}
                <div
                    className={`fixed bottom-0 left-0 top-20 transition-all duration-300 bg-white ${
                        menuExpanded ? 'w-80' : 'w-20'
                    } group`}
                    onMouseEnter={() => setMenuExpanded(true)}
                    onMouseLeave={() => setMenuExpanded(false)}
                >
                    <ul>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden ml-4 text-xl group-hover:inline-block">
                                Eventos
                            </span>
                            <MdOutlineEvent className="block group-hover:hidden size-8" />
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden ml-4 text-xl group-hover:inline-block">
                                Noticias
                            </span>
                            <ImNewspaper className="block group-hover:hidden size-8" />
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden ml-4 text-xl group-hover:inline-block">
                                Oraciones
                            </span>
                            <FaPrayingHands className="block group-hover:hidden size-8" />
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-300 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden ml-4 text-xl group-hover:inline-block">
                                Devocionales
                            </span>
                            <GiOpenBook className="block group-hover:hidden size-8" />
                        </li>
                    </ul>
                </div>
                
                {/* Contenido principal */}
                <div
                    className={`flex overflow-y-auto max-h-[calc(100vh-5rem)] transition-all duration-300 ml-20 ${
                        menuExpanded ? 'translate-x-60' : 'translate-x-0'
                    }`}
                >
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Administracion;

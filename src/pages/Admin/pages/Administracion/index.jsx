import OriginalLogo from "../../../../assets/OriginalLogo.png";
import { Outlet } from "react-router-dom";
import {MdOutlineEvent  } from 'react-icons/md';
import { ImNewspaper } from "react-icons/im";
import { FaPrayingHands } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const Administracion = () => {
    return (
        <>
            <nav className="flex items-center justify-between w-full px-40 py-4 bg-l_color_r-600">
                <div className="flex items-center space-x-5">
                    <img src={OriginalLogo} alt="Logo" className="h-12" />
                    <span className={`font-semibold max-[500px]:text-md min-[500px]:text-xl text-white`}>
                        CPTL - PERÚ
                    </span>
                </div>
                <div className="flex items-center text-white ">
                    Mario Uwu
                </div>
            </nav>
            <div className="flex">
                <div className="fixed bottom-0 left-0 w-20 transition-all duration-200 bg-white top-20 hover:w-80 group">
                    <ul className="group">
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-200 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden text-xl group-hover:block">
                            Eventos
                            </span>
                             <MdOutlineEvent className="block group-hover:hidden size-8"/>
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-200 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden text-xl group-hover:block">
                            Noticias
                            </span>
                             <ImNewspaper className="block group-hover:hidden size-8"/>
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-200 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden text-xl group-hover:block">
                            Oraciones
                            </span>
                             <FaPrayingHands className="block group-hover:hidden size-8"/>
                        </li>
                        <li className="flex items-center justify-center w-full py-4 transition-all duration-200 cursor-pointer group hover:bg-slate-400">
                            <span className="hidden text-xl group-hover:block">
                            Devocionales
                            </span>
                             <GiOpenBook className="block group-hover:hidden size-8"/>
                        </li>

                    </ul>
                </div>
                <div className="flex ml-20 overflow-y-auto max-h-[calc(100vh-5rem)]">
                    <Outlet/> 
              
                </div>
            </div>
        </>
    );
};
export default Administracion
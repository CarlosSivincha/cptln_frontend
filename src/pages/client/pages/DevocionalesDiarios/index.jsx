import { lazy } from "react";

const Header = lazy(() => import("@/pages/client/components/Header"));

const Devocionales = lazy(() => import("@/pages/client/components/Devocionales"));

export const DevocionalesDiarios = () => {

    return (
        <>
            <Header title={'Devocionales Diarios'} color="bg-l_color_y-600" />
            <div className="flex w-full px-32 my-20 space-x-4">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ">
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                        <Devocionales/>
                    </div>
                </div>
                <div className="flex flex-col border-l-4 border-black pl-10 h-max py-10">
                    <span className="font-bold text-2xl text-nowrap">Filtrar Devocionales</span>
                    <label className="font-semibold mt-3">Mes</label>
                    <select name="" id="" className="p-2 rounded-md accent-white">
                        <option value="" className="p-1">Enero</option>
                        <option value="">Febrero</option>
                        <option value="">Marzo</option>
                        <option value="">Abril</option>
                        <option value="">Mayo</option>
                        <option value="">Junio</option>
                        <option value="">Julio</option>
                        <option value="">Agosto</option>
                        <option value="">Septiembre</option>
                        <option value="">Octubre</option>
                        <option value="">Noviembre</option>
                        <option value="">Diciembre</option>
                    </select>

                    <label className="font-semibold mt-4">Año</label>
                    <input type="text" placeholder="Ingrese un año" className="p-2 placeholder:ml-2 mb-4"/>
                    <button className="p-1 text-white bg-[#46797A] rounded-md">
                        Filtrar
                    </button>
                </div>
            </div>
        </>
    )
}

export default DevocionalesDiarios
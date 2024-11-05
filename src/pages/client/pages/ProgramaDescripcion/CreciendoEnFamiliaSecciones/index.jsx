import { lazy, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {RadioCard} from "../components/RadioCard";

import { obtenerRadioDataSeccion } from "@/Api/radio";

const Header = lazy(() => import("@/pages/client/components/Header"));

export const CreciendoEnFamilia = () => {

    const [ contenidoData, setContenidoData ] = useState([]);
    const [ isContenidoData, setIsContenidoData ] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerRadioDataSeccion(id);
            // console.log(response)
            setContenidoData(response.data);
            // console.log(response.data)
            setIsContenidoData(false);
        };
        fetch();
    }, [])

    return(
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24">
            <Header color="bg-l_color_o-600" title={`Sección: ${contenidoData.nombre}`}/>
            <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24">
                <div className="mx-6 min-[450px]:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">

                        {
                            contenidoData.contenidos && contenidoData.contenidos.map((cont, index2) => (
                                <RadioCard key={index2} descripcion={cont.descripcion} contenido={cont.archivos}/>
                            ))
                        }
                        
                        {/* <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/> */}
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default CreciendoEnFamilia
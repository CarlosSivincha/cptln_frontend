import { lazy, useState, useEffect } from "react";
import {RadioCard} from "../components/RadioCard";
import {MediaSlider} from "./components/MediaSlider";


const Header = lazy(() => import("@/pages/client/components/Header"));

export const CreciendoEnFamilia = () => {

    

    return(
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24 pb-12 xl:pb-24">
            <Header color="bg-l_color_v-600" title="Creciendo en Familia"/>
            <div className="flex flex-col gap-12 lg:gap-16 xl:gap-24">
                <p className="standard-paragraph mx-6 sm:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px]">En relación a la familia, CPTLN promueve dos programas que nos hablan de temas importantes a tratar en familia, podemos encontrar material de soporte para saber como actuar en diferentes situaciones, así como un acompañamiento virtual que se mantiene con una persona del equipo que está atenta a los mensajes que llegan a estas páginas. </p>
                <div className="mx-6 min-[450px]:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px]">
                    <h3 className="h3-subtitles mb-3">Salud</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kas askjdbaskj ajsbdasnd ua kasjbdans dakhsd a,nd aisjkdmnasd hiaskn dasknd asnl,d ashikdasn,da a ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd na ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadks alkdna ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                    </div>
                </div>

                <div className="mx-6 min-[450px]:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px]">
                    <h3 className="h3-subtitles mb-3">Testimonios</h3>
                    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kas askjdbaskj ajsbdasnd ua kasjbdans dakhsd a,nd aisjkdmnasd hiaskn dasknd asnl,d ashikdasn,da a ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd na ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadks alkdna ks ksnd alsdkjasnd lkjasdn ksand jlkandadlakjs l ilajde alskdm alskdj ahwriea rfladkjna oaih flasknfr aalofdn aaskjd basdhf qwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                        <RadioCard descripcion="akjdna akjsndaskjd aosndak andasd alkdnad admkasdm askdasdkan akdasdn adklsd akdaskd akdnaskd kasdaksd ksadksald kandkad klasdnasd lkasdnasd lkndas dlkansd aslkadmnas lkasdnask alkdna ks ksnd alsdkjasnqwourfh"/>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default CreciendoEnFamilia
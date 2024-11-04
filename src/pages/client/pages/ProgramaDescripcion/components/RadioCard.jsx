import { useState } from "react";
import imgjoel1 from '../../../../../assets/Joel_2.jpg'
import { MediaSlider } from "../CreciendoEnFamilia/components/MediaSlider";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export const RadioCard = ({descripcion = "", contenido = []}) =>{
    const [isOpenDescription, setIsOpenDescription] = useState(false);

    function onClickDescription()  {
        setIsOpenDescription(!isOpenDescription);
    }
    return(
    <div className="max-w-[400px] sm:max-w-[600px] max-h-[800px]">
        <MediaSlider contenido={contenido}/>
        <div
            className={`bg-white flex px-6 pb-2 pt-4 transition-all duration-500 ${
                isOpenDescription ? 'max-h-[500px] overflow-y-auto' : 'max-h-[98px] min-[1100px]:max-h-[115px] overflow-hidden'
            }`} style={{scrollbarWidth: "none"}}
        >
            <p
                className={`flex-grow standard-paragraph transition-all duration-500 ${
                    isOpenDescription ? 'opacity-100 visibility-visible' : 'opacity-100 visibility-hidden'
                }`}
            >
                {descripcion}
            </p>

            {isOpenDescription ? (
                <FaMinus
                    onClick={onClickDescription}
                    className="ml-2 -mr-2 flex-shrink-0 cursor-pointer transition-transform duration-1000 transform rotate-0 min-[1100px]:mt-1"
                    size={23}
                />
            ) : (
                <FaPlus
                    onClick={onClickDescription}
                    className="ml-2 -mr-2 flex-shrink-0 cursor-pointer transition-transform duration-1000 transform rotate-90 min-[1100px]:mt-1"
                    size={23}
                />
            )}
        </div>
    </div>
    )
}

export default RadioCard
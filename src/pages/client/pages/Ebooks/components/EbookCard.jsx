import image22 from "../../../../../assets/image22.png";

export const EbookCard = (props) => {
    return(
        <div className="relative h-80 w-64 xl:h-96 xl:w-80">
            <img src={props.img} alt="image" className="h-full w-full" /> 
            <div className="absolute inset-0 flex flex-col justify-between">
                <div className="bg-l_color_v-600 px-3 py-1 mt-5">
                    <span className="font-light text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em] text-white">Ebook</span>
                    <h4 className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-white">{props.titulo}</h4>
                </div>
                <div className="bg-l_color_v-600 px-3 py-3 flex justify-center">
                    <span className="font-bold text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em] text-white">VER MÁS</span>
                </div>
                
            </div>
            
        </div>
    );
}

export default EbookCard;
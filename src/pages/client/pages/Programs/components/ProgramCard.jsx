import { GrLinkNext } from "react-icons/gr";

export const ProgramCard = ({ posicion = "derecha", ...props }) => {
    function convertirTexto(texto) {
        return texto ? texto.trim().toLowerCase().replace(/\s+/g, '-') : '';
    }

    return (
        <div className={`mx-10 sm:mx-auto md:mx-10 min-[930px]:mx-auto max-w-full max-md:max-w-[560px] max-lg:max-w-[800px] min-[880px]:mx-auto lg:mx-20 md:flex md:h-[350px] lg:h-[500px] min-[1100px]:h-[550px] xl:h-[650px] 2xl:h-[750px] max-[1450px]:max-w-[1380px] xl:mx-24 min-[1700px]:mx-auto min-[1700px]:w-[1600px] min-[1800px]:w-[1550px] lg:relative`}>
            <div className="md:flex md:w-1/2 lg:w-full">
                <div className={`h-full lg:w-2/6 max-lg:hidden ${posicion === "izquierda" ? "order-1 lg:rounded-l-[12px]" : "order-2 lg:rounded-r-[12px]"}`}
                    style={{
                        backgroundColor: props.color,
                    }}
                ></div>
                <img src={props.img} alt="img" className={`max-sm:h-full object-cover max-md:rounded-t-[16px] md:rounded-l-[16px] lg:rounded-l-[0px] lg:w-4/6 ${posicion === "izquierda" ? "order-2 lg:rounded-r-[12px]" : "order-1 lg:rounded-l-[12px]"}`} />
            </div>

            <div className={`lg:absolute lg:h-96 ${posicion === "izquierda" ? "lg:inset-y-0 lg:left-20 xl:left-32 2xl:left-44" : "lg:inset-y-0 lg:right-20 xl:right-32 2xl:right-44"} lg:my-auto min-[1100px]:h-[28rem] max-md:h-[350px] md:w-1/2 xl:max-w-[540px] 2xl:h-[30rem] max-md:rounded-b-[16px] lg:rounded-[12px] md:rounded-r-[16px] bg-white`}>
                <div className="p-8 lg:p-10 xl:p-14 flex flex-col h-full w-full">
                    <h3 className="max-md:text-[1.625em] max-lg:text-[1.875em] max-[1110px]:text-[2.1875em] text-[2.5em] font-bold leading-[1.25em] text-[#222126]">{props.title}</h3>
                    <p className="mt-4 lg:mt-6 xl:mt-8 font-normal text-[1.30em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] text-[#555656] line-clamp-[7] min-[375px]:line-clamp-[9] min-sm:line-clamp-none" dangerouslySetInnerHTML={{ __html:  props.description}}></p>
                    <a href={`/programas/${convertirTexto(props.title)}`} className="flex items-center gap-3 self-end mt-auto font-bold text-[1.2em] leading-[1.5em] max-[1100px]:text-[1.075em] max-[1100px]:leading-[1.4em] text-[#3C5050] hover:text-[#46797A] rounded-md">
                        <span>Conocer más</span>
                        <GrLinkNext />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProgramCard;

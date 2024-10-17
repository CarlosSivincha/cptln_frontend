export const ProgramCard = (props) => {
    // max-w-sm m-auto
    return(
        <div className={` rounded-[16px] mx-5 min-[420px]:max-w-sm min-[420px]:m-auto relative`}>
            <img src={props.img} alt="img" className="h-full w-full" />
            <div className="">
            
                <div className={`${props.color} px-3 py-5 rounded-b-[12px] flex flex-col gap-5`}>
                    <h3 className="text-2xl font-bold">{props.title}</h3>
                    <p className="text-base md:text-lg xl:text-xl">{props.description}</p>
                    <a href="#" className="">
                        <button className="bg-l_color_v h-auto mt-2 px-5 py-1 text-white rounded-md">Leer más</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProgramCard;
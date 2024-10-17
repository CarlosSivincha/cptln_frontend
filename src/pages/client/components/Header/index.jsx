/* eslint-disable react/prop-types */
export const Header = (props) => {
    return(
        <>
            <header className={`${props.color} w-full max-[500px]:h-auto max-md:pt-[120px] max-md:pb-[50px] max-[600px]:h-[300px] max-md:h-[350px] md:h-[400px] md:pt-[160px] md:pb-[80px] flex flex-col justify-center items-center gap-5`}>
                <h2 className="text-white max-[500px]:text-[1.625em] max-md:text-[2.1875em] max-lg:text-[2.5em] max-[1110px]:text-[2.8125em] min-[1110px]:text-[3.125em] font-bold leading-[1.2em]">{props.title}</h2>
                {props.text && (
                    <p className="text-xl font-bold text-center text-white 
                        text-[13px]                     // Tamaño de texto para resoluciones menores a 505px
                        min-[505px]:text-[16px]         // Tamaño de texto para resoluciones desde 505px hasta 768px
                        min-[768px]:text-[17px]         // Tamaño de texto para resoluciones desde 768px hasta 1024px
                        min-[1024px]:text-[18px]        // Tamaño de texto para resoluciones desde 1024px hasta 1366px
                        min-[1366px]:text-[20px]        // Tamaño de texto para resoluciones desde 1366px hasta 1920px
                        min-[1920px]:text-[21px]        // Tamaño de texto para resoluciones Full HD (1920px y superiores)
                    ">
                        {props.text}
                    </p>
                )}
            </header>
        </>
    )
}

export default Header;

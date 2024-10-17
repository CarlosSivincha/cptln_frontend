import { lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import TransferImage1 from "../../../../assets/img_D_C_2.png"; 
import TransferImage2 from "../../../../assets/img_D_C_3.png"; 
import TransferImage3 from "../../../../assets/img_D_C.png";
import TransferImage3_2 from "../../../../assets/img_N_card.png";
import TransferImage4 from "../../../../assets/bcp-logo.png";
import TransferImage5 from "../../../../assets/img_Yape.png";
import TransferImage6 from "../../../../assets/img_QR.png";


const Header = lazy(() => import("@/pages/client/components/Header"));

export const Donate = () => {
     // Configuración del carrusel
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="flex flex-col gap-12 pb-12 lg:gap-16 xl:gap-28 lg:pb-16 xl:pb-28">
            
            <Header color="bg-l_color_o-600" title="¿CÓMO PUEDES AYUDAR?" text="Facilitamos tu contribución brindándote distintas opciones"/>
            
            {/* Cuadro de Transferencias */}
            <div className="container px-4 mx-auto lg:px-8">
                <div className="p-8 rounded-lg shadow-lg bg-slate-300">
                    <div className="grid grid-cols-1 gap-8 text-black md:grid-cols-2">
                        <div>
                            <h3 className="mb-10 text-lg font-bold text-center ">TRANSFERENCIAS INTERBANCARIAS</h3>
                            <div className="flex items-center mb-8 space-x-4">
                                <img src={TransferImage4} alt="bcp" className="h-8"/>
                                <div>
                                    <p>Titular: Fundación CPTLN</p>
                                    <p>CBU: 07200892 20000000206204</p>
                                    <p>CUIT: 30-64669900-9</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-8 space-x-4">
                                <img src={TransferImage4} alt="bcp" className="h-8"/>
                                <div>
                                    <p>Titular: Fundación CPTLN</p>
                                    <p>CBU: 07200892 20000000206204</p>
                                    <p>CUIT: 30-64669900-9</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-8 space-x-4">
                                <img src={TransferImage4} alt="bcp" className="h-8"/>
                                <div>
                                    <p>Titular: Fundación CPTLN</p>
                                    <p>CBU: 07200892 20000000206204</p>
                                    <p>CUIT: 30-64669900-9</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-10 text-lg font-bold text-center ">TRANSFERENCIAS MÓVILES</h3>
                            <div className="flex items-center mb-20 space-x-4">
                                <img src={TransferImage5} alt="Yape" className="h-12"/>
                                <div>  
                                    <p>Titular: Nombre del titular</p>
                                    <p>Número: 938472342</p>
                                </div>
                                <img src={TransferImage6} alt="QR" className="h-12"/>
                            </div>
                            <div className="flex items-center mb-20 space-x-4">
                                <img src={TransferImage5} alt="Yape" className="h-12"/>
                                <div>  
                                    <p>Titular: Nombre del titular</p>
                                    <p>Número: 938472342</p>
                                </div>
                                <img src={TransferImage6} alt="QR" className="h-12"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carrusel de Imágenes */}
            <div className="py-8 bg-l_color_Fondo">
                <div className="container px-4 mx-auto lg:px-8">
                    <h3 className="mb-8 text-xl font-bold text-center text-black">NUESTROS TRABAJOS</h3>
                    <Slider {...settings}>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage1} alt="Trabajo 1" className="object-contain w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage2} alt="Trabajo 2" className="object-contain w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3} alt="Trabajo 3" className="object-contain w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3_2} alt="Trabajo 4" className="object-contain w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3} alt="Trabajo 5" className="object-contain w-full h-full" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Donate;

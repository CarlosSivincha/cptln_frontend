import { lazy, useState, useEffect } from "react";
import OriginalLogo from "../../../../assets/OriginalLogo.png";
import Logo_Wpp from "../../../../assets/Logo_Wpp.png";
import Fondo_C from "../../../../assets/img_F_contactanos.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TransferImage1 from "../../../../assets/img_D_C_2.png"; 
import TransferImage2 from "../../../../assets/img_D_C_3.png"; 
import TransferImage3 from "../../../../assets/img_D_C.png";
import TransferImage3_2 from "../../../../assets/img_N_card.png";

const Header = lazy(() => import("@/pages/client/components/Header"));

export const Contact = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col gap-20">
            {/* Header */}
            <Header color="bg-l_color_v-600" title="CONTÁCTANOS" />
            {/* Main Content */}
            <div className="flex flex-col [@media(min-width:1280px)]:flex-row justify-center mx-auto h-90 [@media(min-width:1280px)]:w-[75%] [@media(min-width:1920px)]:w-[65%] gap-0">
                {/* Contenedor principal */}
                <div className="flex flex-col [@media(min-width:1280px)]:flex-row w-full">
                    {/* Sección del formulario */}
                    {isMobile ? (
                        <div className="p-8 bg-[#A7A692] rounded-none">
                            <div className="flex justify-center mb-6">
                                <img src={OriginalLogo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <form>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="Nombre" className="p-3 bg-gray-100 rounded-md" />
                                    <input type="text" placeholder="Apellido" className="p-3 bg-gray-100 rounded-md" />
                                </div>
                                <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 bg-gray-100 rounded-md" />
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="Teléfono" className="p-3 bg-gray-100 rounded-md" />
                                    <select className="flex-1 px-4 py-2 border rounded-full">
                                        <option value="">Ciudad</option>
                                        <option value="Lima">Lima</option>
                                        <option value="Trujillo">Trujillo</option>
                                        {/* Agregar más ciudades */}
                                    </select>
                                </div>
                                <textarea placeholder="Mensaje" className="w-full h-40 p-3 bg-gray-100 rounded-md"></textarea>
                                <button type="submit" className="w-full p-3 mt-4 text-white rounded-md bg-l_color_v-600">Enviar</button>
                            </form>
                        </div>
                    ) : (
                        <div className="w-full [@media(min-width:1280px)]:w-1/2 bg-[#65633F] p-8 rounded-none">
                            <div className="p-8 bg-[#EAE9E5] rounded-none">
                                {/* Logo */}
                                <div className="flex justify-center mb-6">
                                    <img src={OriginalLogo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                                </div>
                                {/* Formulario */}
                                <form>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Nombre" className="p-3 bg-gray-100 rounded-md" />
                                        <input type="text" placeholder="Apellido" className="p-3 bg-gray-100 rounded-md" />
                                    </div>
                                    <input type="email" placeholder="Correo Electrónico" className="w-full p-3 mb-4 bg-gray-100 rounded-md" />
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="Teléfono" className="p-3 bg-gray-100 rounded-md" />
                                        <select className="flex-1 px-4 py-2 border rounded-full">
                                            <option value="">Ciudad</option>
                                            <option value="Amazonas">Amazonas</option>
                                            <option value="Áncash">Áncash</option>
                                            <option value="Apurímac">Apurímac</option>
                                            <option value="Arequipa">Arequipa</option>
                                            <option value="Ayacucho">Ayacucho</option>
                                            <option value="Cajamarca">Cajamarca</option>
                                            <option value="Callao">Callao</option>
                                            <option value="Cusco">Cusco</option>
                                            <option value="Huancavelica">Huancavelica</option>
                                            <option value="Huánuco">Huánuco</option>
                                            <option value="Ica">Ica</option>
                                            <option value="Junín">Junín</option>
                                            <option value="La Libertad">La Libertad</option>
                                            <option value="Lambayeque">Lambayeque</option>
                                            <option value="Lima">Lima</option>
                                            <option value="Loreto">Loreto</option>
                                            <option value="Madre de Dios">Madre de Dios</option>
                                            <option value="Moquegua">Moquegua</option>
                                            <option value="Pasco">Pasco</option>
                                            <option value="Piura">Piura</option>
                                            <option value="Puno">Puno</option>
                                            <option value="San Martín">San Martín</option>
                                            <option value="Tacna">Tacna</option>
                                            <option value="Tumbes">Tumbes</option>
                                            <option value="Ucayali">Ucayali</option>
                                        </select>
                                    </div>
                                    <textarea placeholder="Mensaje" className="w-full h-40 p-3 bg-gray-100 rounded-md"></textarea>
                                    <button type="submit" className="w-full p-3 mt-4 text-white rounded-md bg-l_color_v-600">Enviar</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Sección de contacto */}
                    <div className="relative w-full [@media(min-width:1280px)]:w-1/2 [@media(max-width:1279px)]:mt-8">
                        {/* Imagen de fondo */}
                        <div className="absolute inset-0 bg-center bg-cover">
                            <img src={Fondo_C} alt="Imagen de fondo" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        </div>

                        {/* Información de contacto */}
                        <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
                            <h2 className="mb-4 text-4xl font-semibold">Contacto</h2>
                            <p className="mb-2">Dirección: Juan B. Alberdi 3480, Villa Ballester - Buenos Aires</p>
                            <p className="mb-2">Teléfono: +54 11 4738 4327</p>
                            <p className="mb-2">WhatsApp: +54 911 5323 4647</p>
                            <p>Email: cptln@cptln.org.ar</p>
                            {/* Icono de WhatsApp */}
                            <a href="https://chat.whatsapp.com/tu-enlace-al-grupo" target="_blank" rel="noopener noreferrer" className="block mt-2 sm:mt-4">
                                <img src={Logo_Wpp} alt="WhatsApp" className="w-8 h-8 sm:w-10 sm:h-10" />
                            </a>
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
                                <img src={TransferImage1} alt="Trabajo 1" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage2} alt="Trabajo 2" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3} alt="Trabajo 3" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3_2} alt="Trabajo 4" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Contact;

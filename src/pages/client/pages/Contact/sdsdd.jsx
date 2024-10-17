import { lazy } from "react";
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
        <div className="flex flex-col gap-6 pb-6 md:gap-12 md:pb-12 lg:gap-16 lg:pb-16 xl:gap-28 xl:pb-28">
            {/* Header */}
            <Header color="bg-l_color_v-600" title="CONTÁCTANOS" />
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 lg:px-80">
                {/* Contenedor Principal */}
                <div className="relative flex flex-col md:flex-row w-full overflow-hidden rounded-lg shadow-lg h-[auto] md:h-[800px]">
                    {/* Cuadro de Color Sólido */}
                    <div className="flex-none w-full md:w-1/3 bg-[#65633F]"></div>

                    {/* Imagen de Fondo con Filtro */}
                    <div className="relative flex w-full md:w-2/3 h-[300px] md:h-full">
                        <img
                            src={Fondo_C}
                            alt="Imagen de fondo"
                            className="object-cover w-full h-full"
                        />
                        {/* Filtro Oscuro */}
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        {/* Texto de Contacto */}
                        <div className="absolute left-4 sm:left-8 md:left-[30%] top-2/4 transform -translate-y-1/2 p-4 sm:p-6 md:p-8 text-white">
                            <h2 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl">Contacto</h2>
                            <p className="text-sm sm:text-base">Dirección: Juan B. Alberdi 3480, Villa Ballester - Buenos Aires</p>
                            <p className="text-sm sm:text-base">Teléfono: +54 11 4738 4327</p>
                            <p className="text-sm sm:text-base">Whatsapp: +54 911 53234647</p>
                            <p className="text-sm sm:text-base">Email: cptln@cptln.org.ar</p>
                            {/* Icono de WhatsApp */}
                            <a
                                href="https://chat.whatsapp.com/tu-enlace-al-grupo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 sm:mt-4"
                            >
                                <img src={Logo_Wpp} alt="WhatsApp" className="w-8 h-8 sm:w-10 sm:h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Formulario de Contacto */}
                    <div className="relative bg-[#EAE9E5] p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md w-full md:w-5/12 
                    max-w-md mx-auto md:max-w-none md:absolute md:top-1/2 md:left-12 md:transform md:-translate-y-1/2">
                        <div className="flex justify-center mb-4">
                            {/* Logo de Contacto */}
                            <img src={OriginalLogo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                        </div>

                        {/* Campos del Formulario */}
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <input type="text" placeholder="Nombre" className="px-4 py-2 border rounded-full " />
                                <input type="text" placeholder="Apellido" className="px-4 py-2 border rounded-full " />
                            </div>
                            <input type="email" placeholder="Correo Electrónico" className="px-4 py-2 border rounded-full" />
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <input type="text" placeholder="Teléfono" className="flex-1 px-4 py-2 border rounded-full" />
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
                            <textarea placeholder="Mensaje" className="px-4 py-2 border rounded-lg h-60" />
                            <button type="submit" className="px-4 py-2 mt-4 text-white rounded-full bg-l_color_v-600">
                                Enviar
                            </button>
                        </form>
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
                        <div className="px-2">
                            <div className="flex items-center justify-center h-64 overflow-hidden">
                                <img src={TransferImage3} alt="Trabajo 5" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Contact;

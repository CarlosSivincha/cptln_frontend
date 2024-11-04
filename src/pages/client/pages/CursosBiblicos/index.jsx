import { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import videotest from '../../../../assets/file.mp4';
import WhiteIcon from "../../../../assets/WhiteIcon.png";
import { solicitudCursos } from "../../../../Api/cursosbiblicos";
import { CursoCart } from "./components/CursoCart"

const Header = lazy(() => import("@/pages/client/components/Header"));


const CursosBiblico = () => {

    const navigate = useNavigate();

    // Mover el estado dentro del componente
    const [sessionValue, setSessionValue] = useState(false);
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");

    const handleNombre = (event) => setNombres(event.target.value);
    const handleApellido = (event) => setApellidos(event.target.value);
    const handleCorreo = (event) => setCorreo(event.target.value);

    const enviarDatos = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('nombres', nombres);
        formData.append('apellidos', apellidos);
        formData.append('correo', correo);
        try {
            const respuesta = await solicitudCursos(formData);
            console.log(respuesta);
            guardarSessionStorage();
            navigate("/recursos/cursos-biblicos/curso-completo");

            setNombres('');
            setApellidos('');
            setCorreo('');

        } catch (error) {
            console.log(error);
        };
    };

    const guardarSessionStorage = () => {
        
        sessionStorage.setItem('validacion_cursos', true);
        // console.log("Dato guardado en sessionStorage:", true);
        setSessionValue(sessionStorage.getItem('validacion_cursos'))
    };

    const scrollToElement = () => {
        const element = document.getElementById('formulario');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col gap-12 pb-12 lg:gap-16 xl:gap-28 lg:pb-16 xl:pb-28">
            <Header color="bg-l_color_o-600" title="Cursos Bíblicos" />
            <div className="flex md:max-w-[700px] box-content mx-[30px] md:items-center md:mx-auto lg:max-w-[1500px] min-[1580px]:mx-auto lg:mx-[40px] rounded-xl">
                <CursoCart scrollToElement={scrollToElement} titulo = {"Dios se revela"} 
    descripcion = "Dios se revela es un curso que, haciendo uso de la tecnología y lenguaje modernos, explica la fe cristiana. En él se presenta la obra de salvación de Dios a través de Cristo, los principios fundamentales de la fe cristiana y diversos aspectos prácticos de la fe en la vida del creyente." />
            </div>
            <div className="h-auto max-[600px]:w-full flex max-lg:flex-col min-[600px]:mx-[30px] md:w-max-[700px] md:mx-auto lg:mx-[40px] box-content md:items-center min-[1580px]:max-w-[1500px] min-[1580px]:mx-auto min-[1580px]:w-full max-lg:gap-1" id="formulario">
                <div className="flex flex-col justify-center gap-5 px-5 py-5 xl:px-10 max-lg:h-2/5 w-full bg-[#A3723B] text-white lg:text-black lg:bg-white text-center h-auto lg:h-96">
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¡Accede a los cursos llenando el formulario!</p>
                    <p className="font-light text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em] text-justify">Cada uno de los 12 videos contiene una guía de estudio con referencias bíblicas y preguntas de reflexión y discusión.</p>
                    <p className="font-bold text-[1.25em] leading-[1.5em] max-[1100px]:text-[1.125em] max-[1100px]:leading-[1.4em] ">¿Estás listo para aprender?</p>
                </div>
                <div className="flex flex-col gap-5 max-lg:h-3/5 h-auto lg:h-96 w-full bg-[#A3723B] px-5 py-5 xl:px-10 justify-center">
                    <img src={WhiteIcon} alt="" className="self-center w-12 my-4" />
                    <form className="flex flex-col w-full gap-5" onSubmit={enviarDatos}>
                        <div className="flex gap-5 max-md:flex-col">
                            <input
                                type="text"
                                placeholder="Nombre *"
                                value={nombres}
                                onChange={handleNombre}
                                className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]" />
                            <input 
                                type="text" 
                                placeholder="Apellido *" 
                                value={apellidos}
                                onChange={handleApellido}
                                className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]" />
                        </div>
                        <input 
                            type="email" 
                            value={correo}
                            onChange={handleCorreo}
                            placeholder="Correo *"
                            className="py-1.5 px-2 w-full rounded-lg border border-[#EAE9E5] text-[1.125em] leading-[1.5em] max-[1100px]:text-[1em] max-[1100px]:leading-[1.4em]" />
                        <button type="submit" className="px-4 py-2 text-white transition-all duration-300 rounded-md bg-l_color_o-400 hover:shadow-md">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CursosBiblico;

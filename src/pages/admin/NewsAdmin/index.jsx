import { useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { registrarNoticia } from "../../../../Api/News";


const NewsFormComponent = () => {
    const [titulo, setTitulo] = useState("");
    const [cuerpo, setCuerpo] = useState("");
    const [imagenFondo, setImagenFondo] = useState(null); 
    const [imagenesAdicionales, setImagenesAdicionales] = useState([]); 
    const [fecha, setFecha] = useState("");

    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleCuerpo = (html) => setCuerpo(html);
    const handleImagenFondo = (event) => setImagenFondo(event.target.files[0]); 

    const handleImagenesAdicionales = (event) => {
        setImagenesAdicionales(event.target.files); 
    };

    const handleFecha = (event) => setFecha(event.target.value);

    const enviarNoticia = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('cuerpo', cuerpo);
        formData.append('fecha', fecha);
        formData.append('portada',imagenFondo);
        [...imagenesAdicionales].forEach((file) => {
            formData.append('imagenes', file); // Todos los archivos bajo el mismo nombre 'imagenes'
        });
        

        
        try {
            // Aquí iría la función para registrar la noticia
            const respuesta = await registrarNoticia(formData); // Función para manejar el envío
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    return (
        <>
            <Header color="bg-l_color_y-600" title={'Crear Noticia'} />
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Escribe la Noticia</h2>
                <form onSubmit={enviarNoticia} className="space-y-6">
                    <input
                        type="text"
                        name="titulo"
                        value={titulo}
                        onChange={handleTitulo}
                        placeholder="Título"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <ReactQuill
                        className="bg-white rounded-lg"
                        modules={modules}
                        name="cuerpo"
                        value={cuerpo}
                        onChange={handleCuerpo}
                        placeholder="Contenido de la Noticia"
                    />
                    <div>
                        <label className="block mb-2 text-gray-600">Imagen de fondo</label>
                        <input
                            type="file"
                            name="portada"
                            onChange={handleImagenFondo}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-600">Imágenes adicionales (2 o más)</label>
                        <input
                            type="file"
                            name="imagenes"
                            onChange={handleImagenesAdicionales}
                            multiple // Permite seleccionar múltiples imágenes
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <input
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={handleFecha}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        Enviar Noticia
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewsFormComponent;

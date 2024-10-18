import { useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";

const NewsFormComponent = () => {
    const [titulo, setTitulo] = useState("");
    const [cuerpo, setCuerpo] = useState("");
    const [imagenes, setImagenes] = useState([]); // Array para manejar múltiples imágenes
    const [fecha, setFecha] = useState("");

    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleCuerpo = (html) => setCuerpo(html);
    
    // Manejar múltiples imágenes
    const handleImagenes = (event) => {
        const files = Array.from(event.target.files); // Convierte los archivos en un array
        setImagenes(files);
    };

    const handleFecha = (event) => setFecha(event.target.value);

    const enviarNoticia = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('cuerpo', cuerpo);
        formData.append('fecha', fecha);

        // Añadir todas las imágenes al formData
        imagenes.forEach((imagen, index) => {
            formData.append(`imagen${index + 1}`, imagen); // imagen1, imagen2, etc.
        });

        try {
            // Aquí iría la función para registrar la noticia
            const respuesta = await registrarNoticia(formData);
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
                    <input
                        type="file"
                        name="imagenes"
                        onChange={handleImagenes}
                        multiple // Permite seleccionar múltiples imágenes
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
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

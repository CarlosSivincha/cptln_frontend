import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { crearContenidoPrograma } from "../../../Api/programas";
import { useParams } from "react-router-dom";

const ProgramaContenidoAdmin = () => {

    // Obtener el parametro ID
    const { id, idprograma } = useParams()

    // Guardar datos del formulario
    const [subtitulo, setSubtitulo] = useState("");
    const [parrafo, setParrafo] = useState("");
    const [imagen, setImagen] = useState([]);

    // Modificar valores del formulario
    const handleSubtitulo = (event) => setSubtitulo(event.target.value);
    const handleParrafo = (html) => setParrafo(html);
    const handleImagen = (event) => setImagen(event.target.files[0])

    // Verificar si hay un ID en los parametros
    // useEffect(() => {
    //     console.log(id)
    //     if (id) {
    //         const fetch = async () => {
    //             const response = await buscarPrograma(id)
    //             setSelectcategoria(response.data.categoria)
    //             setTitulo(response.data.titulo)
    //         }
    //         fetch()
    //     }
    // }, [])

    // Crear Programa
    const crearContenido = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('subtitulo', subtitulo.trim().replace(/\s+/g, ' '));
            formData.append('parrafo', parrafo);
            formData.append('imagen', imagen);
            const res = await crearContenidoPrograma(id, formData)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    };

    // Modificar Programa
    // const ModificarProgramas = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('subtitulo', subtitulo.trim().replace(/\s+/g, ' '));
    //         formData.append('parrafo', parrafo);
    //         formData.append('imagen', imagen);
    //         const respuesta = await editarPrograma(id, formData);
    //         console.log(respuesta);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // Configuracion de ReactQuill
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    return (
        <>
            <Header color="bg-l_color_y-600" title={`${(id && idprograma) ? 'Editar Programa' : 'Agregar Programa'}`} />
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Añada un contenido para el programa</h2>
                <form onSubmit={(id && idprograma) ? ModificarProgramas : crearContenido} className="space-y-6">
                    <input
                        type="text"
                        value={subtitulo}
                        onChange={handleSubtitulo}
                        placeholder="Subtitulo"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />

                    <ReactQuill
                        className="bg-white rounded-lg"
                        modules={modules}
                        value={parrafo}
                        onChange={handleParrafo}
                        placeholder="Escriba el contenido"
                    />

                    <label className="block mb-2 text-gray-600">Imagen</label>
                    <input
                        type="file"
                        onChange={handleImagen}
                        multiple // Permite seleccionar múltiples imágenes
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />

                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {(id && idprograma) ? 'Modificar Programa' : 'Crear Contenido'}
                    </button>

                </form>
            </div>
        </>
    );
};

export default ProgramaContenidoAdmin;
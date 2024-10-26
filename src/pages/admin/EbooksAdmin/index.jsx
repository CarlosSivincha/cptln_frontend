import { useEffect, useState } from "react";

import Header from "@/pages/client/components/Header";
import { registrarEbooks, obtenerEbooksID, EditarEbooks } from "../../../Api/ebooks";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

const EbooksAdmin = () => {
    const { id } = useParams();
    const [imagenurl, setImagenurl] = useState('');
    const [titulo, setTitulo] = useState("");
    const [portada, setPortada] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [pdf, setPdf] = useState("");
    const [error, setError] = useState("");

    const handleTitulo = (event) => setTitulo(event.target.value);
    const handlePortada = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setPortada(file);
            setError(""); // Clear error if file type is correct
        } else {
            setError("Por favor, sube un archivo de imagen válido para la portada.");
        }
    };
    const handleDescripcion = (event) => setDescripcion(event.target.value);
    const handlePdf = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdf(file);
            setError(""); // Clear error if file type is correct
        } else {
            setError("Por favor, sube un archivo PDF válido.");
        }
    };

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                const response = await obtenerEbooksID(id);
                setTitulo(response.data.titulo);
                setDescripcion(response.data.descripcion);
                setPdf(response.data.pdf);
                setPortada(response.data.portada);
            };
            fetch();
        }
    }, []);

    const subirEbook = async (event) => {
        event.preventDefault();
        if (error) return; // Prevent submission if there's an error

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('portada', portada);
        formData.append('pdf', pdf);
        try {
            const respuesta = await registrarEbooks(formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    const ModificarEbooks = async (event) => {
        event.preventDefault();
        if (error) return; // Prevent submission if there's an error

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('portada', portada);
        formData.append('pdf', pdf);
        try {
            const respuesta = await EditarEbooks(id, formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header color="bg-l_color_r-600" title={`${id ? 'Editar Ebook' : 'Agregar Ebook'}`} />
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Agrega un nuevo Ebook</h2>
                {error && <p className="text-center text-red-500">{error}</p>} {/* Show error message */}
                <form onSubmit={id ? ModificarEbooks : subirEbook} className="space-y-6">
                    <div className="space-y-4 md:flex md:space-x-6 md:space-y-0">
                        <input
                            type="text"
                            name="title"
                            value={titulo}
                            onChange={handleTitulo}
                            placeholder="Título"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <input
                        type="text"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleDescripcion}
                        placeholder="Descripción"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <div className="space-y-4 md:flex md:space-x-6 md:space-y-0">
                        <div>
                            <label className="block mb-2 text-gray-600">Imagen para la Portada del Ebook</label>
                            {id && imagenurl && (
                                <img src={imagenurl} alt="Portada del Ebook" />
                            )}
                            <input
                                type="file"
                                name="portada"
                                onChange={handlePortada}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-600">PDF a subir</label>
                            <input
                                type="file"
                                name="pdf"
                                onChange={handlePdf}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {id ? 'Modificar Ebook' : 'Agregar Ebook'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default EbooksAdmin;
import { useState } from "react";
import { format } from "date-fns"; // Asegúrate de tener esta importación si vas a formatear la fecha
import { es } from "date-fns/locale"; // Importa la localización si es necesario
import ReactQuill from "react-quill"; // Importa ReactQuill
import Header from "@/pages/client/components/Header"; // Asegúrate de que esta ruta sea correcta
import { registrarDevo } from "../../../../Api/Devo";
import "react-quill/dist/quill.snow.css";

const YourFormComponent = () => {

    const [imagen, setImagen] = useState(null)
    const [audio, setAudio] = useState(null)
    const [titulo, setTitulo] = useState("")
    const [versiculo, setVersiculo] = useState("")
    const [parrafo, setParrafo] = useState("")
    const [fecha, setFecha] = useState("")

    const handleImagen = (event) => {
        setImagen(event.target.files[0])
    }
    const handleAudio = (event) => {
        setAudio(event.target.files[0])
    };
    const handleTitulo = (event) => {
        setTitulo(event.target.value)
    }
    const handleVersiculo = (event) => {
        setVersiculo(event.target.value)
    }
    const handleParrafo = (html) => {
        setParrafo(html)
        console.log(parrafo)
    }
    const handleFecha = (event) => {
        setFecha(event.target.value)
    }


    const subirdevo = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('imagen', imagen);
        formData.append('audio', audio);
        formData.append('titulo', titulo);
        formData.append('versiculo', versiculo);
        formData.append('parrafo', parrafo);
        formData.append('fecha', fecha);
        try {
            const respuesta = await registrarDevo(formData)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'], 
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], 
        ],
    };

    return (
        <>
            <Header color="bg-l_color_r-600" title={'Crear Devocional'} />
            <div className="max-w-2xl p-5 mx-auto">
                <h2 className="mb-6 text-3xl font-bold">Escribe el Devocional </h2>
                <form onSubmit={subirdevo} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={titulo}
                        onChange={handleTitulo}
                        placeholder="Título"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={handleFecha}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="text"
                        name="versiculo"
                        value={versiculo}
                        onChange={handleVersiculo}
                        placeholder="Versículo"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />

                    <ReactQuill
                        className="bg-white"
                        modules={modules}
                        name="parrafo"
                        value={parrafo}
                        onChange={handleParrafo}
                        placeholder="Contenido"
                    />
                    <input
                        type="file"
                        multiple
                        name="imagen"
                        onChange={handleImagen}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="file"
                        name="audio"
                        onChange={handleAudio}
                        accept="audio/*, video/mp4"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <button type="submit" className="w-full p-3 font-semibold text-white transition duration-200 rounded-md bg-l_color_y-600 hover:bg-l_color_y-700">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
};

export default YourFormComponent;


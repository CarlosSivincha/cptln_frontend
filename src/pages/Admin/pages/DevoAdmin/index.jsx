import { useState } from "react";
import Header from "@/pages/client/components/Header"; // Asegúrate de que esta ruta sea correcta
import { registrarDevo } from "../../../../Api/Devo";

const YourFormComponent = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        fecha: '',
        versiculo: '',
        parrafo: '',
        imagen: null
    });

    // Simular el envío del formulario
    const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar todos los datos, incluyendo la imagen
    const dataToSend = new FormData();
    dataToSend.append('titulo', formData.titulo);
    dataToSend.append('fecha', formData.fecha); // Envía la fecha tal como está en el formulario
    dataToSend.append('versiculo', formData.versiculo);
    dataToSend.append('parrafo', formData.parrafo);
    if (formData.imagen) {
        dataToSend.append('imagen', formData.imagen);
    }

    try {
        await registrarDevo(dataToSend); // Envía dataToSend a la API
        console.log("Devocional registrado con éxito"); // Mensaje de éxito
    } catch (error) {
        console.error("Error al registrar el devocional:", error); // Manejo de errores
    }
    };


    return (
        <>
            <Header color="bg-l_color_r-600" title={'Crear Devocional'} />
            <div className="max-w-2xl p-5 mx-auto">
                <h2 className="mb-6 text-3xl font-bold">Escribe el Devocional</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                        placeholder="Titulo"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="date"
                        name="fecha"
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="text"
                        name="versiculo"
                        value={formData.versiculo}
                        onChange={(e) => setFormData({ ...formData, versiculo: e.target.value })}
                        placeholder="Versículo"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <textarea
                        name="parrafo"
                        value={formData.parrafo}
                        onChange={(e) => setFormData({ ...formData, parrafo: e.target.value })}
                        placeholder="Parrafo"
                        className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="file"
                        name="imagen"
                        onChange={(e) => setFormData({ ...formData, imagen: e.target.files[0] })}
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

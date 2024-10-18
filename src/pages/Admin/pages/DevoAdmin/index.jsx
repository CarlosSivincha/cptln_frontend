import { useState } from "react";
import { format } from "date-fns"; // Asegúrate de tener esta importación si vas a formatear la fecha
import { es } from "date-fns/locale"; // Importa la localización si es necesario
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

    // Función para formatear la fecha al formato "YYYY-MM-DD"
const formatFecha = (date) => {
    try {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Meses de 0-11 a 1-12
        const day = String(d.getDate()).padStart(2, '0'); // Asegurarse de que el día tenga 2 dígitos
        return `${year}-${month}-${day}`; // Formato: YYYY-MM-DD
    } catch (error) {
        return ''; // Manejo si la fecha no es válida
    }
};

    // Simular el envío del formulario
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            fecha: formatFecha(formData.fecha) // Formatea la fecha en formato numérico
        };
        // Aquí puedes enviar `formattedData` a la API o manejarlo según necesites
        console.log(formattedData); // O la función para enviar a la API

        await  registrarDevo(formData)
    };
    

    return (
        <>
            <Header color="bg-l_color_r-600" title={'Crear Devocional'} />
            <div className="max-w-2xl p-5 mx-auto">
                <h2 className="mb-6 text-3xl font-bold">Escribe el Devocional </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Título"
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
                        name="contenido"
                        value={formData.contenido}
                        onChange={(e) => setFormData({ ...formData, contenido: e.target.value })}
                        placeholder="Contenido"
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

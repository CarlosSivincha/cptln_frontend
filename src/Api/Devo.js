import axios from "./axios";

// Función para registrar un devocional
export const registrarDevo = async (devo) => {
    try {
        const response = await axios.post("devocionales", devo);
        return response.data; // Retorna los datos de la respuesta
    } catch (error) {
        console.error("Error al registrar el devocional:", error); // Manejo de errores
        throw error; // Vuelve a lanzar el error para que se maneje en el componente
    }
};

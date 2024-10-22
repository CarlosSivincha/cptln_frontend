import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { obtenerEventosID, registrarEvento,EditarEventos } from "../../../Api/eventos";
import { useParams, useNavigate } from "react-router-dom";


const EventsAdmin = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [titulo, setTitulo] = useState("");
    const [cuerpo, setCuerpo] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [caracteresRestantes, setCaracteresRestantes] = useState(200); // Para controlar el límite de caracteres


    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleCuerpo = (html) => {
        const textoPlano = html.replace(/<[^>]+>/g, ''); // Elimina el HTML para contar solo el texto
        if (textoPlano.length <= 200) {
            setCuerpo(html);
            setCaracteresRestantes(200 - textoPlano.length);
        } else {
            // Solo permite los primeros 200 caracteres y corta el resto
            const recortado = textoPlano.substring(0, 200);
            setCuerpo(recortado);
            setCaracteresRestantes(0);
        }
    };
    const handleFecha = (event) => setFecha(event.target.value);
    const handleHora = (event) => setHora(event.target.value)
    const handleUbicacion = (event) => setUbicacion(event.target.value);


    useEffect(() => {
        console.log(id)
        if (id) {
            const fetch = async () => {
                const response = await obtenerEventosID(id)
                setTitulo(response.data.titulo)
                setCuerpo(response.data.cuerpo)
                setFecha(response.data.fecha)
                setHora(response.data.hora)
                setUbicacion(response.data.ubicacion)
                
            }
            fetch()
            
        }
    }, [])

    

    const enviarEvento = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('cuerpo', cuerpo);
        formData.append('fecha', fecha);
        formData.append('hora', hora);
        formData.append('ubicacion', ubicacion);

        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await registrarEvento(formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };
    const ModificarEvento = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('cuerpo', cuerpo);
        formData.append('fecha', fecha);
        formData.append('hora', hora);
        formData.append('ubicacion', ubicacion);

        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await EditarEventos(id,formData);
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
            <Header color="bg-l_color_v-600" title={`${id ?'Editar Evento':'Crear Evento'}`} />
            
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Escribe el Evento</h2>
                <form onSubmit={id ? ModificarEvento:enviarEvento} className="space-y-6">
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
                        placeholder="Cuerpo del evento (máximo 200 caracteres)"
                    />
                    <p className="text-sm text-gray-600">Caracteres restantes: {caracteresRestantes}</p>
                    <div
                        className="space-y-4 md:flex md:space-x-6 md:space-y-0">
                        <input
                            type="date"
                            name="fecha"
                            value={fecha}
                            onChange={handleFecha}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                        <input
                            type="time"
                            name="hora"
                            value={hora}
                            onChange={handleHora}
                            className="w-full p-4 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-600">
                            Ejemplo de ubicación: <strong>Av. Luna Pizarro 126 - 128, Cercado de Arequipa 04001</strong>
                        </label>
                        <input
                            type="text"
                            name="ubicacion"
                            value={ubicacion}
                            onChange={handleUbicacion}
                            placeholder="Ubicación del evento"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {id ?'Modificar Evento':' Enviar Evento'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default EventsAdmin;

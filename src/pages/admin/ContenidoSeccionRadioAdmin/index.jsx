import { useEffect, useState } from "react";
import { obtenerSeccionCotenido, agregarSeccionContenido, modificarSeccionContenido } from "../../../Api/radio";
import { useParams, useNavigate } from "react-router-dom";

const ContenidoSeccionRadioAdmin = () => {

    const { idseccion, idcontenido } = useParams();
    const navigate = useNavigate();

    const [descripcion, setDescripcion] = useState("");
    const [media, setMedia] = useState([]);

    const handleDescripcion = (event) => setDescripcion(event.target.value);

    // Formatos permitidos para archivos de imagen, audio y video
    const formatosPermitidos = {
        imagen: ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/bmp", "image/tiff", "image/svg+xml"],
        audio: ["audio/mp3", "audio/wav", "audio/aac", "audio/flac", "audio/ogg", "audio/m4a"],
        video: ["video/mp4", "video/avi", "video/mkv", "video/mov", "video/wmv", "video/flv", "video/webm"]
    };

    // Validación de archivos subidos
    const handleMedia = (event) => {
        const archivosSeleccionados = Array.from(event.target.files);
        const archivosValidos = archivosSeleccionados.filter((archivo) => {
            const tipoArchivo = archivo.type;
            return (
                formatosPermitidos.imagen.includes(tipoArchivo) ||
                formatosPermitidos.audio.includes(tipoArchivo) ||
                formatosPermitidos.video.includes(tipoArchivo)
            );
        });

        if (archivosValidos.length !== archivosSeleccionados.length) {
            alert("Algunos archivos tienen un formato no permitido y se han excluido.");
        }
        
        setMedia(archivosValidos); // Actualizamos el estado solo con los archivos válidos
    };

    useEffect(() => {
        if (idseccion && idcontenido) {
            const fetch = async () => {
                const response = await obtenerSeccionCotenido(idseccion, idcontenido);
                setDescripcion(response.data.descripcion);
            };
            fetch();
        }
    }, [idseccion, idcontenido]);

    // Agregar Seccion
    const agregarSeccionNueva = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('descripcion', descripcion.trim().replace(/\s+/g, ' '));
        if (media.length > 0) {
            [...media].forEach((file) => formData.append('media', file));
        }
        const response = await agregarSeccionContenido(idseccion, formData);
         // Verificar la respuesta correctamente
         if (response.status === 200) {
            navigate(`/admin/radioconfig/tablasecciones/${idseccion}/tablacontenidoseccion`);
        }
        console.log(response);
    };

    // Modificar Seccion
    const modificarSeccionExistente = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('descripcion', descripcion.trim().replace(/\s+/g, ' '));
        if (media.length > 0) {
            [...media].forEach((file) => formData.append('media', file));
        }
        const response = await modificarSeccionContenido(idseccion, idcontenido, formData);
        if (response.status === 200) {
            navigate(`/admin/radioconfig/tablasecciones/${idseccion}/tablacontenidoseccion`);
        }
        console.log(response);
    };
    return (
        <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                {(idseccion && idcontenido) ? "Datos Actuales" : "Nuevo Contenido"}
            </h2>
            <form onSubmit={(idseccion && idcontenido) ? modificarSeccionExistente : agregarSeccionNueva} className="space-y-6">
                <input
                    type="text"
                    name="Descripcion"
                    value={descripcion}
                    onChange={handleDescripcion}
                    placeholder="Escribe una descripcion"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    required
                />
                <div>
                    <input
                        type="file"
                        name="media"
                        onChange={handleMedia}
                        multiple
                        accept=".jpeg, .jpg, .png, .webp, .bmp, .tiff, .svg, .mp3, .wav, .aac, .flac, .ogg, .m4a, .mp4, .avi, .mkv, .mov, .wmv, .flv, .webm"
                        required={!idcontenido} // Obligatorio solo al agregar, no al modificar
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                >
                    {(idseccion && idcontenido) ? "Guardar Cambios" : "Agregar Contenido"}
                </button>
            </form>
        </div>
    );
};

export default ContenidoSeccionRadioAdmin;

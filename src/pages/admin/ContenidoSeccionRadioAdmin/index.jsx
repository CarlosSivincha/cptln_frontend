import { useEffect, useState } from "react";
import { obtenerSeccionCotenido, agregarSeccionContenido, modificarSeccionContenido } from "../../../Api/radio";
import { useParams } from "react-router-dom";

const ContenidoSeccionRadioAdmin = () => {

    // Obtener el parametro ID
    const { idseccion, idcontenido } = useParams()

    // Guardar datos del formulario
    const [descripcion, setDescripcion] = useState("");
    const [media, setMedia] = useState([])

    const handleDescripcion = (event) => setDescripcion(event.target.value);
    const handleMedia = (event) => setMedia(event.target.files)

    // Obtener Datos de la Seccion
    useEffect(() => {
        if (idseccion && idcontenido) {
            const fetch = async () => {
                const response = await obtenerSeccionCotenido(idseccion, idcontenido)
                setDescripcion(response.data.descripcion)
            }
            fetch()
        }
    }, [])

    useEffect(() => {
        console.log(media);
    }, [media])

    // Agregar Seccion
    const agregarSeccionNueva = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('descripcion', descripcion.trim().replace(/\s+/g, ' '));
        if (media.length > 0) {
            [...media].forEach((file) => { formData.append('media', file) });
        }
        const response = await agregarSeccionContenido(idseccion, formData)
        console.log(response);
    }

    // Modificar Seccion
    const modificarSeccionExistente = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('descripcion', descripcion.trim().replace(/\s+/g, ' '));
        if (media.length > 0) {
            [...media].forEach((file) => { formData.append('media', file) });
        }
        const response = await modificarSeccionContenido(idseccion, idcontenido, formData)
        console.log(response);
    }

    return (
        <>
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">{(idseccion && idcontenido) ? `Datos Actuales` : 'Nuevo Contenido'}</h2>
                <form onSubmit={(idseccion && idcontenido) ? modificarSeccionExistente : agregarSeccionNueva} className="space-y-6">
                    <input
                        type="text"
                        name="Descripcion"
                        value={descripcion}
                        onChange={handleDescripcion}
                        placeholder="AÃ±ade una descripcion"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <div>
                        <input type="file" name="media" onChange={handleMedia} multiple />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600">
                        {(idseccion && idcontenido) ? 'Guardar Cambios' : 'Agregar Contenido'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContenidoSeccionRadioAdmin
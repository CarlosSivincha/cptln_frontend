import Header from "@/pages/client/components/Header";
import ReactQuill from "react-quill";

const RadioAdmin = () => {

    const guardarDatosDeRadio = () => {

    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
        ],
    };

    return (
        <>
            <div className="flex flex-col px-36 pt-10 w-full">
                <h2 className="mb-6 text-3xl font-bold text-start text-gray-800">Configuracion de la radio</h2>
                <form onSubmit={guardarDatosDeRadio} className="space-y-6">
                    <input
                        type="text"
                        name="titulo"

                        placeholder="Título"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="text"
                        name="abreviatura"

                        placeholder="Abreviatura"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />

                    <ReactQuill
                        className="bg-white rounded-lg"
                        modules={modules}
                        name="descripcion"

                        placeholder="Descripcion del Programa"
                    />



                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        Guardar Cambios
                    </button>

                </form>
            </div>
        </>
    )
}

export default RadioAdmin
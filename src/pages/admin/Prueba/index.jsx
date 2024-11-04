import { useState } from "react";
import Header from "@/pages/client/components/Header";

const Prueba = () => {
    const [files, setFiles] = useState([]);

    // Función para manejar la carga de archivos
    const handleFileUpload = (event) => {
        const newFile = event.target.files[0];
        if (newFile) {
            const fileType = newFile.type.split("/")[0]; // Extraer tipo de archivo (e.g., "image", "video", "audio")
            setFiles((prevFiles) => [...prevFiles, { file: newFile, type: fileType }]);
        }
    };

    // Función para enviar los archivos a la base de datos
    const handleSubmit = () => {
        files.forEach((fileObj) => {
            console.log(`Enviando archivo: ${fileObj.file.name}, tipo: ${fileObj.type}`);
            // Aquí enviarías cada archivo a la base de datos
            // Puedes usar fetch/axios para enviar el archivo
        });
    };

    return (
        <>
            <Header color="bg-l_color_r-600" title="Crear Devocional" />
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Sube tus Archivos</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, video/*, audio/*"
                        onChange={handleFileUpload}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer"
                    />
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        Enviar Archivos
                    </button>
                </form>
                <div className="mt-4">
                    <h3 className="mb-2 text-xl font-medium">Archivos subidos:</h3>
                    <ul>
                        {files.map((fileObj, index) => (
                            <li key={index} className="text-gray-700">
                                {fileObj.file.name} - Tipo: {fileObj.type}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Prueba;

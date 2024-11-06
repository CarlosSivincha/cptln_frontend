import { useEffect, useState } from "react";
import Header from "@/pages/client/components/Header";
import { crearCapituloCurso, buscarCapituloEspecifico, editarCapituloCurso } from "../../../Api/cursos";
import "react-quill/dist/quill.snow.css";
import { useParams,useNavigate } from "react-router-dom";

const CapituloCursosAdmin = () => {

    const navigate = useNavigate()
    const { idcurso, idcapitulo } = useParams()

    const [titulo, setTitulo] = useState("");
    const [pdflink, setPdflink] = useState(null);
    const [youtubelink, setYoutubelink] = useState("");

    const handleTitulo = (event) => setTitulo(event.target.value);
    const handlePdflink = (event) => setPdflink(event.target.files[0]);
    const handleYoutubelink = (event) => setYoutubelink(event.target.value);

    useEffect(() => {
        console.log(idcurso)
        if ((idcurso && idcapitulo)) {
            const fetch = async () => {
                const response = await buscarCapituloEspecifico(idcurso, idcapitulo)
                setTitulo(response.data.titulo)
                setYoutubelink(response.data.idYoutube)
            }
            fetch()
        }
    }, [])

    const CrearCapituloCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('pdf', pdflink);
        formData.append('youtube', youtubelink);

        try {
            const respuesta = await crearCapituloCurso(idcurso,formData);
            console.log(respuesta);
            if (respuesta.status === 200) navigate(`/admin/tablacursos/${idcurso}/tablacapitulos`);
        } catch (error) {
            console.log(error);
        }
    };

    const ModificarCapituloCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('pdf', pdflink);
        formData.append('youtube', youtubelink);
        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await editarCapituloCurso(idcurso, idcapitulo, formData);
        
            console.log(respuesta);
            if (respuesta.status === 200) navigate(`/admin/tablacursos/${idcurso}/tablacapitulos`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="min-w-[400px] max-w-3xl px-6 py-12 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Capitulo para curso</h2>
               
                <form onSubmit={(idcurso && idcapitulo) ? ModificarCapituloCurso : CrearCapituloCurso} className="p-6 space-y-5 bg-white rounded-lg shadow-lg">
                    <div>
                        <label className="block font-semibold text-gray-700">Titulo del Capitulo</label>
                        <input
                            type="text"
                            name="title"
                            value={titulo}
                            onChange={handleTitulo}
                            placeholder="Título"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Link del PDF</label>
                        <input
                            type="file"
                            name="pdf"
                            onChange={handlePdflink}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            accept="application/pdf"
                            
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Link de Youtube</label>
                        <input
                            type="url"
                            name="Youtube"
                            value={youtubelink}
                            onChange={handleYoutubelink}
                            placeholder="https://www.youtube.com/"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>


                    <div className="py-2">
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                        >
                            {(idcurso && idcapitulo) ? 'Modificar Capitulo' : 'Enviar Capitulo'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

};

export default CapituloCursosAdmin;
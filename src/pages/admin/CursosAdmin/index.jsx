import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import { registrarCurso, obtenerCursoID, EditarCurso } from "../../../Api/cursos";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

const CursoAdmin = () => {

    //const navigate = useNavigate()
    const { idcurso } = useParams()


    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);


    useEffect(() => {
        console.log(idcurso)
        if (idcurso) {
            const fetch = async () => {
                const response = await obtenerCursoID(idcurso)
                setTitulo(response.data.titulo)
                setDescripcion(response.data.descripcion)     
            }
            fetch()
        }
    }, [])
    const CrearCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        try {
            const respuesta = await registrarCurso(formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    const ModificarCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await EditarCurso(id, formData);
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
            <Header color="bg-l_color_r-600" title={`${id ? 'Editar Devocional' : 'Crear Curso'}`} />
            <div className="min-w-[400px] max-w-3xl px-6 py-12 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Escribe el Curso</h2>
                <form onSubmit={id ? ModificarCurso : CrearCurso} className="p-6 space-y-10 bg-white rounded-lg shadow-lg">
                    <div className="space-y-6">
                        <input
                            type="text"
                            name="title"
                            value={titulo}
                            onChange={handleTitulo}
                            placeholder="Título"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <div className="h-56">
                        <ReactQuill
                            className="h-full bg-white rounded-lg"
                            modules={modules}
                            name="descripcion"
                            value={descripcion}
                            onChange={handleDescripcion}
                            placeholder="Descripción de este curso"
                        />
                    </div>
                    <div className="py-2">
                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {id ? 'Modificar Curso' : 'Enviar Curso'   }
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
    
};

export default CursoAdmin;

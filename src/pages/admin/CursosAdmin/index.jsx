import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { registrarCurso, obtenerCursoID, EditarCurso } from "../../../Api/cursos";
import "react-quill/dist/quill.snow.css";
import { useParams, useNavigate } from "react-router-dom";

const CursoAdmin = () => {
    const navigate = useNavigate();
    //const navigate = useNavigate()
    const { idcurso } = useParams()

    // Formulario
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);

    // Obtener Datos del curso
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

    // Agregar un curso
    const CrearCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        try {
            const respuesta = await registrarCurso(formData);
            console.log(respuesta);
            if (respuesta.status === 200) navigate("/admin/tablacursos");
        } catch (error) {
            console.log(error);
        }
    };

    // Modificar un curso
    const ModificarCurso = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await EditarCurso(idcurso, formData);
            console.log(respuesta);
            if (respuesta.status === 200) navigate("/admin/tablacursos");
        } catch (error) {
            console.log(error);
        }
    };

    // Modulos de ReactQuill
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    
    return (
        <>
            <div className="min-w-[400px] max-w-3xl px-6 py-12 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Escribe el Curso</h2>
                <form onSubmit={idcurso ? ModificarCurso : CrearCurso} className="p-6 space-y-10 bg-white rounded-lg shadow-lg">
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
                            {idcurso ? 'Modificar Curso' : 'Enviar Curso'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

};

export default CursoAdmin;

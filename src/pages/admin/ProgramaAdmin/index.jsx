import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { crearPrograma, editarPrograma, buscarPrograma } from "../../../Api/programas";
import { useParams } from "react-router-dom";
import { obtenerCategorias } from "../../../Api/categorias";

const ProgramaAdmin = () => {

    const { id } = useParams()

    const [titulo, setTitulo] = useState("");
    const [selectcategoria, setSelectcategoria] = useState("");
    const [abreviatura, setAbreviatura] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenesAdicionales, setImagenesAdicionales] = useState([]);
    const [color, setColor] = useState("#ffffff");

    const [categorias, setCategorias] = useState([]);

    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleAbreviatura = (event) => setAbreviatura(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);
    const handleColor = (event) => setColor(event.target.value);
    const handleImagenesAdicionales = (event) => {
        setImagenesAdicionales(event.target.files);
    };
    const enviarPrograma = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo.trim().replace(/\s+/g, ' '));
        formData.append('descripcion', descripcion);
        formData.append('categoria', selectcategoria);
        formData.append('abreviatura', abreviatura);
        formData.append('color', color);

        [...imagenesAdicionales].forEach((file) => {
            formData.append('imagenes', file); // Todos los archivos bajo el mismo nombre 'imagenes'
        });
        try {
            // Aquí iría la función para registrar la noticia
            const respuesta = await crearPrograma(formData); // Función para manejar el envío
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fech = async () => {
            const response = await obtenerCategorias()
            setCategorias(response.data)
        }
        fech()
    }, [])
    
    useEffect(() => {
        console.log(id)
        if (id) {
            const fetch = async () => {
                const response = await buscarPrograma(id)
                setSelectcategoria(response.data.categoria)
                setTitulo(response.data.titulo)
                setDescripcion(response.data.descripcion)
                setAbreviatura(response.data.abreviatura)
                setColor(response.data.color)
                setImagenesAdicionales(response.data.imagenes)
            }
            fetch()
        }
    }, [])
    const ModificarProgramas = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo.trim().replace(/\s+/g, ' '));
        formData.append('descripcion', descripcion);
        formData.append('categoria', selectcategoria);
        formData.append('abreviatura', abreviatura);
        formData.append('color', color);
        [...imagenesAdicionales].forEach((file) => {
            formData.append('imagenes', file); // Todos los archivos bajo el mismo nombre 'imagenes'
        });
        try {
            // Aquí iría la función para registrar el evento
            const respuesta = await editarPrograma(id, formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };
    return (
        <>
            <Header color="bg-l_color_y-600" title={`${id ? 'Editar Programa' : 'Agregar Programa'}`} />
            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Escribe el Programa</h2>
                <form onSubmit={id ? ModificarProgramas : enviarPrograma} className="space-y-6">
                    <input
                        type="text"
                        name="titulo"
                        value={titulo}
                        onChange={handleTitulo}
                        placeholder="Título"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <input
                        type="text"
                        name="abreviatura"
                        value={abreviatura}
                        onChange={handleAbreviatura}
                        placeholder="Abreviatura"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                    />
                    <ReactQuill
                        className="bg-white rounded-lg"
                        modules={modules}
                        name="descripcion"
                        value={descripcion}
                        onChange={handleDescripcion}
                        placeholder="Contenido de Porgrama"
                    />
                    <div className="flex">
                    <div>
                        <label className="block mb-2 text-gray-600">Imágenes adicionales (2 o más)</label>
                        <input
                            type="file"
                            name="imagenes"
                            onChange={handleImagenesAdicionales}
                            multiple // Permite seleccionar múltiples imágenes
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                        />
                    </div>
                    <div className="space-y-2">
                            <label className="block font-semibold text-gray-700">Escoge un Color</label>
                            <input
                                type="color"
                                name="color"
                                value={color}
                                onChange={handleColor}
                                className="w-full h-16 border border-gray-300 rounded-lg cursor-pointer"
                            />
                        </div>
                    </div>
                    
                    <select value={selectcategoria} onChange={(event) => setSelectcategoria(event.target.value)}>
                        {Array.isArray(categorias) && categorias.map((categoria) => (
                            
                                <option key={categoria._id}>{categoria.nombre}</option>
                            
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {id ? 'Modificar Programa' : 'Enviar Programa'}
                    </button>

                </form>
            </div>
        </>
    );
};

export default ProgramaAdmin;
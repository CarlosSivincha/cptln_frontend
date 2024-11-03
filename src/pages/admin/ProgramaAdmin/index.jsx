import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { crearPrograma, editarPrograma, buscarPrograma } from "../../../Api/programas";
import { useParams } from "react-router-dom";
import { obtenerCategorias } from "../../../Api/categorias";

const ProgramaAdmin = () => {

    // Obtener el parametro ID
    const { id } = useParams()

    // Guardar datos del formulario
    const [titulo, setTitulo] = useState("");
    const [selectcategoria, setSelectcategoria] = useState("");
    const [abreviatura, setAbreviatura] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenesAdicionales, setImagenesAdicionales] = useState([]);
    const [color, setColor] = useState(null);
    const [enlace, setEnlace] = useState(null);
    const [portada, setPortada] = useState([])
    const [showPortada, setShowPortada] = useState(null)

    // Guardar categorias para el select option
    const [categorias, setCategorias] = useState([]);

    // Modificar valores del formulario
    const handleTitulo = (event) => setTitulo(event.target.value);
    const handleAbreviatura = (event) => setAbreviatura(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);
    const handleColor = (event) => setColor(event.target.value);
    const handleEnlace = (event) => setEnlace(event.target.value);
    const handleImagenesAdicionales = (event) => {
        setImagenesAdicionales(event.target.files);
    };
    const handlePortada = (event) => setPortada(event.target.files[0])

    // Intercambiar entre datos o agregar un enlace
    const [panelEnlaceDatos, setPanelEnlaceDatos] = useState(false)
    const handlePanelEnlaceDatos = () => {
        setPanelEnlaceDatos(!panelEnlaceDatos)
    }

    const [imagenNew, setImagenNew] = useState(false)
    const handleImagenNew = () => {
        setImagenNew(!imagenNew)
    }


    //Colores
    const colorOptions = [
        { name: "Color 1", value: "#45787C" },
        { name: "Color 2", value: "#9B1B31" },
        { name: "Color 3", value: "#CC5F27" },
        { name: "Color 4", value: "#B9B239" },
    ];

    // Traer las categorias para el formulario
    useEffect(() => {
        const fech = async () => {
            const response = await obtenerCategorias()
            setCategorias(response.data)
        }
        fech()
    }, [])

    // Verificar si hay un ID en los parametros
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
                setEnlace(response.data.enlace)
                setShowPortada(response.data.portada)
                if(enlace) {
                    setPanelEnlaceDatos(true)
                } else {
                    setPanelEnlaceDatos(false)
                }
            }
            fetch()
        }
    }, [])

    // Crear Programa
    const enviarPrograma = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('titulo', titulo.trim().replace(/\s+/g, ' '));
            formData.append('descripcion', descripcion);
            formData.append('color', color);
            formData.append('abreviatura', abreviatura);
            formData.append('categoria', selectcategoria);
            if (panelEnlaceDatos) {
                [...imagenesAdicionales].forEach((file) => {
                    formData.append('imagenes', file); // Todos los archivos bajo el mismo nombre 'imagenes'
                });
            } else {
                formData.append('enlace', enlace);
                formData.append('portada', portada)
            }
            const respuesta = await crearPrograma(formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

    // Modificar Programa
    const ModificarProgramas = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('titulo', titulo.trim().replace(/\s+/g, ' '));
            formData.append('descripcion', descripcion);
            formData.append('abreviatura', abreviatura);
            formData.append('color', color);
            formData.append('categoria', selectcategoria);
            if (panelEnlaceDatos) {
                [...imagenesAdicionales].forEach((file) => {
                    formData.append('imagenes', file); // Todos los archivos bajo el mismo nombre 'imagenes'
                });
            } else {
                formData.append('enlace', enlace);
                if (imagenNew) {
                    formData.append('portada', portada);
                }
            }
            const respuesta = await editarPrograma(id, formData);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }

    // Configuracion de ReactQuill
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
                        placeholder="TÃ­tulo"
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
                        placeholder="Descripcion del Programa"
                    />

                    <div className="flex flex-col">
                        <label htmlFor="">Seleccione una categoria</label>
                        <select className="p-4"
                            value={selectcategoria}
                            onChange={(event) => setSelectcategoria(event.target.value)}
                        >
                            <option value={""}>Sin categoria</option>
                            {Array.isArray(categorias) && categorias.map((categoria) => (
                                <option key={categoria._id} value={categoria.nombre}>{categoria.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-4">
                        {colorOptions.map((option) => (
                            <label key={option.value} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="color"
                                    value={option.value}
                                    checked={color === option.value}
                                    onChange={handleColor}
                                    className="hidden"
                                />
                                <span
                                    className={`w-10 h-10 rounded-full border-2 ${color === option.value ? "border-black" : "border-gray-300"}`}
                                    style={{ backgroundColor: option.value }}
                                ></span>
                                <span className="ml-2">{option.name}</span>
                            </label>
                        ))}
                    </div>

                    <div className="grid grid-cols-2">
                        <button onClick={handlePanelEnlaceDatos}
                            className={`transition-all duration-200 ease-in p-3  ${panelEnlaceDatos ? 'bg-gray-100 shadow-gray-400 shadow-inner' : 'bg-gray-300'}`} disabled={panelEnlaceDatos ? true : false}>
                            Datos
                        </button>
                        <button onClick={handlePanelEnlaceDatos}
                            className={`transition-all duration-200 ease-in p-3 ${panelEnlaceDatos ? 'bg-gray-300' : 'bg-gray-100 shadow-gray-400 shadow-inner'}`} disabled={panelEnlaceDatos ? false : true}>
                            Enlace
                        </button>
                    </div>

                    <div className="border border-gray-300 p-2">

                        {panelEnlaceDatos ?
                            (
                                <>
                                    <div className={`space-y-10 transition-all duration-200 ${panelEnlaceDatos ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="flex">
                                            <div>
                                                <label className="block mb-2 text-gray-600">ImÃ¡genes adicionales (2 o mÃ¡s)</label>
                                                <input
                                                    type="file"
                                                    name="imagenes"
                                                    onChange={handleImagenesAdicionales}
                                                    multiple // Permite seleccionar mÃºltiples imÃ¡genes
                                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <div className={`flex flex-col space-y-5 transition-all duration-200 ${panelEnlaceDatos ? 'opacity-0' : 'opacity-100'}`}>
                                        <div>
                                            <label className="block mb-2 text-gray-600">URL</label>
                                            <input type="text"
                                                value={enlace}
                                                onChange={handleEnlace}
                                                placeholder="Añadir url"
                                                className="p-4 rounded-md border w-full border-gray-300 placeholder:italic"
                                            />
                                        </div>
                                        <div>
                                            {(id) ?
                                                (
                                                    imagenNew ?
                                                        (
                                                            <>
                                                                <label className="block mb-2 text-gray-600">Imagen</label>
                                                                <div className="flex space-x-5">
                                                                    <div className={`flex flex-col ${portada ? 'w-2/3' : 'w-full'} `}>
                                                                        <input
                                                                            type="file"
                                                                            onChange={handlePortada}
                                                                            multiple // Permite seleccionar múltiples imágenes
                                                                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                                                                        />
                                                                    </div>
                                                                    {portada && (
                                                                        <div className="flex w-1/3 items-center justify-center">
                                                                            <button
                                                                                onClick={handleImagenNew}
                                                                                className={`rounded-md p-4 ${imagenNew ? 'bg-red-500' : 'bg-yellow-500'}`}>
                                                                                {imagenNew ? 'Cancelar' : 'Cambiar Imagen'}
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </>
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <div className="flex">
                                                                    <img src={showPortada} alt="" className="flex w-1/2" />
                                                                    <div className="flex w-1/2 justify-center items-center">
                                                                        <button
                                                                            onClick={handleImagenNew}
                                                                            className={`flex  rounded-md p-4 ${imagenNew ? 'bg-red-500' : 'bg-yellow-500'}`}>
                                                                            {imagenNew ? 'Cancelar' : 'Cambiar Imagen'}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                )
                                                :
                                                (
                                                    <>
                                                        <label className="block mb-2 text-gray-600">Imagen</label>
                                                        <input
                                                            type="file"
                                                            onChange={handlePortada}
                                                            multiple // Permite seleccionar múltiples imágenes
                                                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                                                        />
                                                    </>

                                                )
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>


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
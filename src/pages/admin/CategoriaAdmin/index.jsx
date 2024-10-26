import React, { useEffect, useState } from "react";
import Header from "@/pages/client/components/Header";
import "react-quill/dist/quill.snow.css";
import { obtenerCategoriasID, registrarCategoria, EditarCategorias } from "../../../Api/categorias";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

const CategoriaAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [nombre, setNombre] = useState("");
    // const [objetivo, setObjetivo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [imagenes, setImagenes] = useState([]);
    const [imagenesResponse, setImagenesResponse] = useState([])
    const handleNombre = (event) => setNombre(event.target.value);
    // const handleObjetivo = (event) => setObjetivo(event.target.value);
    const handleColor = (event) => setColor(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);
    const handleImagenes = (event) => {
        setImagenes(event.target.files);
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    useEffect(() => {
        console.log(selectedOption);
    }, [selectedOption])

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                const response = await obtenerCategoriasID(id);
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion);
                setColor(response.data.color);
                setImagenesResponse(response.data.imagenes)  
                const estadoIndex = response.data.imagenes.findIndex(imagen => imagen.estado === true)
                setSelectedOption(estadoIndex)
                console.log(selectedOption)
            }
            fetch();
        }
    }, []);



    useEffect(() => {
        if (id) {
            const fetch = async () => {
                const response = await obtenerCategoriasID(id);
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion);
                setColor(response.data.color);
                setImagenesResponse(response.data.imagenes);
    
                // Busca y selecciona la imagen con estado === true después de actualizar imagenesResponse
                const selectedImageIndex = response.data.imagenes.findIndex(imagen => imagen.estado === true);
                if (selectedImageIndex !== -1) {
                    setSelectedOption(selectedImageIndex);
                }
            };
            fetch();
        }
    }, [id]);

    const enviarCategoria = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('descripcion', descripcion);
            formData.append('color', color);
            [...imagenes].forEach((file) => {
                formData.append('imagenes', file);
            });
            const respuesta = await registrarCategoria(formData);
            if (respuesta.status == 200) {
                navigate('/admin/tablacategoria')
            }
        } catch (error) {
            console.log(error);
        }
    };

    const ModificarCategoria = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('descripcion', descripcion);
            formData.append('color', color);
            // formData.append('objetivo', objetivo);
            [...imagenes].forEach((file) => {
                formData.append('imagenes', file);
            });
            formData.append('portadaIndex', selectedOption)
            const respuesta = await EditarCategorias(id, formData);
            console.log(respuesta);
            if (respuesta.status == 200) {
                navigate('/admin/tablacategoria')
            }
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
            <Header color="bg-l_color_v-600" title={`${id ? 'Editar Categoria' : 'Crear Categoria'}`} />

            <div className="max-w-4xl px-5 py-10 mx-auto md:px-8 lg:px-12">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Escribe la Categoria</h2>
                <form onSubmit={id ? ModificarCategoria : enviarCategoria} className="space-y-8">
                    <div>
                        <div className="space-y-2">
                            <label className="block font-semibold text-gray-700">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={handleNombre}
                                placeholder="Nombre"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            />
                        </div>
                        {/* <div className="space-y-2">
                            <label className="block font-semibold text-gray-700">Objetivo</label>
                            <input
                                type="text"
                                name="objetivo"
                                value={objetivo}
                                onChange={handleObjetivo}
                                placeholder="Escribe el objetivo"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            />
                        </div> */}
                    </div>

                    <div className="space-y-4">
                        <label className="block font-semibold text-gray-700">Descripción</label>
                        <ReactQuill
                            className="bg-white rounded-lg"
                            modules={modules}
                            name="descripcion"
                            value={descripcion}
                            onChange={handleDescripcion}
                            placeholder="Escribe la descripción"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Imágenes actuales</label>
                        <div className="grid grid-cols-2 gap-4">
                            {imagenesResponse.map((imagen, index) => (
                                <React.Fragment key={index}>
                                    <img src={imagen.ruta} alt="" />
                                    <div className="flex w-full justify-center items-centers">
                                        <input
                                            type="radio"
                                            value={index}
                                            checked={selectedOption == index}
                                            onChange={handleOptionChange}
                                            className="mr-2 scale-150"
                                        />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="block font-semibold text-gray-700">Imágenes</label>
                            <input
                                type="file"
                                name="imagenes"
                                onChange={handleImagenes}
                                accept=".png, .jpg, .jpeg"
                                multiple
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

                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold text-white transition duration-200 rounded-lg bg-l_color_y-600 hover:bg-l_color_y-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l_color_y-600"
                    >
                        {id ? 'Modificar Categoria' : 'Enviar Categoria'}
                    </button>
                </form>
            </div>
        </>
    );

};

export default CategoriaAdmin;
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
    const [descripcion, setDescripcion] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [imagenes, setImagenes] = useState([]);
    const [imagenesResponse, setImagenesResponse] = useState([])
    const [changeImagenes, setChangeImagenes] = useState(false)
    const handleNombre = (event) => setNombre(event.target.value);
    const handleColor = (event) => setColor(event.target.value);
    const handleDescripcion = (html) => setDescripcion(html);

    const handleImagenes = (event) => setImagenes(event.target.files)

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);

        // Filtrar solo archivos de imagen
        const imageFiles = files.filter(file => file.type.startsWith('image/'));

        // Agregar las nuevas imágenes al estado
        setImagenes(prev => [...prev, ...imageFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // const [selectedOption, setSelectedOption] = useState(null);
    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // }


    // useEffect(() => {
    //     if (id) {
    //         const fetch = async () => {
    //             const response = await obtenerCategoriasID(id);
    //             setNombre(response.data.nombre);
    //             setDescripcion(response.data.descripcion);
    //             setColor(response.data.color);
    //             setImagenesResponse(response.data.imagenes)  
    //             const estadoIndex = response.data.imagenes.findIndex(imagen => imagen.estado === true)
    //             setSelectedOption(estadoIndex)
    //             console.log(selectedOption)
    //         }
    //         fetch();
    //     }
    // }, []);



    useEffect(() => {
        if (id) {
            const fetch = async () => {
                const response = await obtenerCategoriasID(id);
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion);
                setColor(response.data.color);
                setImagenesResponse(response.data.imagenes);
            };
            fetch();
        }
    }, []);

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
<<<<<<< HEAD
            if (respuesta.status == 200) return navigate('/admin/tablacategoria')
=======
            if (respuesta.status == 200) {
                navigate('/admin/tablacategoria')
            }
>>>>>>> cd177aee97d2a14cc5a5d33f167750a30d4378e9
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
            const respuesta = await EditarCategorias(id, formData);
            console.log(respuesta);
<<<<<<< HEAD
            if (respuesta.status == 200) { 
                navigate('/admin/tablacategoria') 
=======
            if (respuesta.status == 200) {
                navigate('/admin/tablacategoria')
>>>>>>> cd177aee97d2a14cc5a5d33f167750a30d4378e9
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

            <div className="max-w-4xl px-5 py-10 lg:w-[1000px] w-[500px] m-auto md:px-8 lg:px-12">
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
                    {id && (
                        changeImagenes ?
                            (
                                <>
                                    <button className="p-2 bg-red-700 text-white rounded-md"
                                        onClick={() => {
                                            setChangeImagenes(false)
                                            setImagenes([])
                                        }}>
                                        Cancelar
                                    </button>
                                    <div onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        className="border-dashed border-2 border-gray-400 p-4 mb-4 flex flex-col items-center justify-center"
                                    >
                                        {imagenes.length > 0 ? (
                                            <React.Fragment>
                                                <div className="grid grid-cols-3 gap-2 mb-4">
                                                    {imagenes.map((imagen, index) => (
                                                        <img
                                                            key={index}
                                                            src={URL.createObjectURL(imagen)}
                                                            alt={`Imagen ${index + 1}`}
                                                            className="w-full h-32 object-cover"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="w-full text-center text-4xl italic text-gray-400">Aun puede añadir mas imagenes</p>
                                            </React.Fragment>
                                            ) 
                                            :
                                            (
                                                <p>Arrastra y suelta imágenes aquí</p>
                                            )
                                        }
                                    </div>
                                </>
                            )
                            :
                            (
                                <div>
                                    <button className="p-2 bg-green-700 text-white rounded-md"
                                        onClick={() => {
                                            setChangeImagenes(true)
                                        }}>
                                        Cambiar imagenes
                                    </button>
                                    <label className="block font-semibold text-gray-700">Imágenes actuales</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {imagenesResponse.map((imagen, index) => (
                                            <React.Fragment key={index}>
                                                <img src={imagen.ruta} alt="" />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )

                    )}

                    {
                        /* <div className="flex w-full justify-center items-centers">
                            <input
                                type="radio"
                                value={index}
                                checked={selectedOption == index}
                                onChange={handleOptionChange}
                                className="mr-2 scale-150"
                            />
                        </div> */
                    }







                    <div className="">
                        {/* <div className="space-y-2">
                            <label className="block font-semibold text-gray-700">Imágenes</label>
                            <input
                                type="file"
                                name="imagenes"
                                onChange={handleImagenes}
                                accept=".png, .jpg, .jpeg"
                                multiple
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-l_color_y-600"
                            />
                        </div> */}
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
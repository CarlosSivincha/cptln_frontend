import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';

import { login,EliminarUsuario  } from '../../../Api/auth';

import { MdEditDocument } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



const TablaUsuario = () => {

    // Gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    const [usuario, setUsuario] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


     // Función para obtener los eventos con paginación
     const fetchUsuario = async (page) => {
        try {
            setIsLoading(true); // Iniciar estado de carga
            const response = await login({ params: { page: Number(page), limit: 10 } });
            setUsuario(response.data.noticias); // Actualizar el estado con los eventos
            setCurrentPage(response.data.currentPage); // Actualizar la página actual
            setTotalPages(response.data.totalPages); // Actualizar el total de páginas
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false); // Finalizar estado de carga
        }
    };
       // Llamada inicial para cargar los datos al montar el componente
       useEffect(() => {
        fetchUsuario(currentPage);
    }, [currentPage]);

    const columnHelper = createColumnHelper();


    const columns = [
        columnHelper.accessor('_id', {
            header: 'ID',
            cell: info => null,
            enableColumnFilter: false,
            size: 0,
            meta: {
                hidden: true,
            },
        }),
        columnHelper.accessor('nombres', {
            header: "Nombre",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('apellidos', {
            header: "A pellidos",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('correo', {
            header: "Correo",
            cell: info => info.getValue(),
        }), columnHelper.accessor('contraseña', {
            header: "Contraseña",
            cell: info => info.getValue(),
        }),
       
    ];
    
    const table = useReactTable({
        data: usuario,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const navigate = useNavigate();
    
    // Función para manejar la eliminación de un evento y refrescar los datos
    const handleDelete = async (id) => {
        const success = await EliminarUsuario({ id }); // Llamada a la función de eliminación
        if (success) { // Verifica si la eliminación fue exitosa
            fetchUsuario(currentPage); // Refresca los datos después de eliminar
        }
    };
    const EditarUsuario = (id) => {
        navigate(`${id}`);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-5xl p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Usuairos</h3>
                    <button
                        onClick={() => navigate('/admin/login')}
                        className="flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Agregar
                        <FaPlus className="ml-1" size={13} />
                    </button>
                </div>

                {/* Tabla */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-collapse border-gray-300 table-auto">
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className="text-left bg-gray-200">
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            className={`px-4 py-2 border border-gray-300 ${header.column.id === '_id' ? 'hidden' : ''}`}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                    <th className="px-4 py-2 border border-gray-300">Acciones</th>
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row, index) => (
                                <tr
                                    key={row.id}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <td
                                            key={cell.id}
                                            className={`px-4 py-2 border border-gray-300 ${cell.column.id === '_id' ? 'hidden' : ''}`}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                    <td className="w-20 px-4 py-2 text-center border border-gray-300">
                                        <button
                                            type='button'
                                            onClick={() => EditarUsuario(row.original._id)}
                                            className="text-blue-500 transition-colors hover:text-blue-600"
                                        >
                                            <MdEditDocument size={20} />
                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => handleDelete(row.original._id)} // Uso de la función handleDelete
                                            className="text-red-500 transition-colors hover:text-red-600"
                                        >
                                            <MdDeleteForever size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Paginación */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        className={`px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-l_color_r-600 transition-colors ${currentPage === 1 || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1 || isLoading}
                    >
                        Anterior
                    </button>
                    <button
                        className={`px-4 py-2 text-sm rounded-md  bg-red-500 text-white hover:bg-l_color_r-600 transition-colors ${currentPage === totalPages || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || isLoading}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TablaUsuario;
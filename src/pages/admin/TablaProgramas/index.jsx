import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { obtenerProgramasPagination } from '../../../Api/programas';
import { MdEditDocument, MdEditNote } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaLink } from "react-icons/fa";
import { obtenerCategorias } from '../../../Api/categorias';

const TablaProgramas = () => {

    const navigate = useNavigate();

    const EditarPrograma = (id) => {
        navigate(`${id}`);
    };

    const EditorContenido = (id) => {
        navigate(`${id}/tablacontenido`)
    }

    const [programas, setProgramas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Estado de carga
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const fetch = async (page) => {
            try {
                setIsLoading(true); // Iniciar estado de carga
                const response = await obtenerProgramasPagination({ params: { page: Number(page), limit: 10 } });
                setProgramas(response.data.programas);
                setCurrentPage(response.data.currentPage);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false); // Finalizar estado de carga
            }
        }
        fetch(currentPage);
    }, [currentPage]);

    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerCategorias()
            setCategorias(response.data)
        }
        fetch()
    }, [])

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('_id', {
            header: 'ID',
            cell: info => null, // No muestra el valor en la celda
            enableColumnFilter: false,
            size: 0, // Mantén el tamaño en 0 para ocupar menos espacio
            meta: {
                hidden: true, // Puedes usar esta propiedad para marcar que está oculta
            },
        }),
        columnHelper.accessor('titulo', {
            header: "Titulo",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('categoria_id', {
            header: "Categoria",
            cell: info => {
                const categoria = categorias.find(categoria => categoria._id === info.getValue())
                return categoria ? categoria.nombre : ''
            },
        }),
    ];

    const table = useReactTable({
        data: programas,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

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
                    <h3 className="text-xl font-semibold text-gray-700">Programas</h3>
                    <button
                        onClick={() => navigate('/admin/programas')}
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
                                            className={`px-2 py-2 text-sm font-semibold text-gray-600 border border-gray-300 ${header.column.id === '_id' ? 'hidden' : ''}`}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                    <th className="px-2 py-2 text-sm font-semibold text-gray-600 border border-gray-300 w-28">Acciones</th>
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
                                            className={`px-2 py-2 text-sm text-gray-700 border border-gray-300 ${cell.column.id === '_id' ? 'hidden' : ''}`}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                    <td className="grid grid-cols-2 place-items-center space-x-2 justify-center px-2 py-2 text-sm text-gray-700 border border-gray-300 w-28">
                                        <div>
                                            <button
                                                type='button'
                                                onClick={() => EditarPrograma(row.original._id)}
                                                className="flex text-blue-500 transition-colors hover:text-blue-600"
                                            >
                                                <MdEditDocument size={20} />
                                            </button>
                                        </div>
                                        <div>
                                            {row.original.enlace ? (
                                                <a href={row.original.enlace} target='_blank' className='flex'>
                                                    <FaLink size={20} className='fill-gray-400' />
                                                </a>
                                            ) : row.original.contenido && (
                                                <button
                                                    type='button'
                                                    onClick={() => EditorContenido((row.original._id))}
                                                    className='flex'>
                                                    <MdEditNote size={30} />
                                                </button>
                                            )}
                                        </div>
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

export default TablaProgramas;
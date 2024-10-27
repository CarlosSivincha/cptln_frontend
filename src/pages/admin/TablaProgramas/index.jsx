import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { obtenerProgramasPagination } from '../../../Api/programas';
import { MdEditDocument } from "react-icons/md";

const TablaProgramas = () => {

    const [programas, setProgramas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Estado de carga

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
        columnHelper.accessor('categoria', {
            header: "Categoria",
            cell: info => info.getValue(),
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
                                    <td className="px-4 py-2 border border-gray-300 text-center">
                                        <button
                                            type='button'
                                            onClick={() => EditarCategorias(row.original._id)}
                                            className="text-blue-500 transition-colors hover:text-blue-600">

                                            <MdEditDocument size={20} />
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

export default TablaProgramas;
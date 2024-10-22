import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { obtenerNoticiaPag } from '../../../Api/noticias';
import { MdEditDocument } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const TablaNews = () => {
    const [noticias, setNoticias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetch = async (page) => {
            try {
                setIsLoading(true);
                const response = await obtenerNoticiasPag({ params: { page: Number(page), limit: 5 } });
                setNoticias(response.data.noticias);
                setCurrentPage(response.data.currentPage);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetch(currentPage);
    }, [currentPage]);

    const columnHelper = createColumnHelper();

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const stripHtml = (html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.innerText;
    };

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
        columnHelper.accessor('titulo', {
            header: "Titulo",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('cuerpo', {
            header: "Cuerpo",
            cell: info => truncateText(stripHtml(info.getValue()), 70), // Primero elimina HTML y luego trunca
        }),
        columnHelper.accessor('fecha', {
            header: "Fecha",
            cell: info => info.getValue(),
        }),
    ];

    const table = useReactTable({
        data: noticias,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const navigate = useNavigate();

    const EditarNoticias = (id) => {
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
                    <h3 className="text-xl font-semibold text-gray-700">Noticias</h3>
                    <button
                        onClick={() => navigate('/admin/newsad')}
                        className="flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Agregar
                        <FaPlus  className="ml-1"  size={13}/>
                    </button>
                </div>

                {/* Tabla */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 table-auto">
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
                                    <th className="px-2 py-2 text-sm font-semibold text-gray-600 border border-gray-300">Acciones</th>
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
                                    <td className="flex items-center justify-center px-2 py-2 text-sm text-gray-700 border border-gray-300">
                                        <button
                                            type='button'
                                            onClick={() => EditarNoticias(row.original._id)}
                                            className="text-blue-500 transition-colors hover:text-blue-600"
                                        >
                                            <MdEditDocument size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* PaginaciÃ³n */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        className={`px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors ${currentPage === 1 || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1 || isLoading}
                    >
                        Anterior
                    </button>
                    <button
                        className={`px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors ${currentPage === totalPages || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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

export default TablaNews;
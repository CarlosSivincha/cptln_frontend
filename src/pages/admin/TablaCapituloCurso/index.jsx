import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { buscarContenidosDelCurso, ordenarListaDeCapitulos } from '../../../Api/cursos';
import { MdEditDocument } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const TablaCapituloCurso = () => {

    const navigate = useNavigate();

    const { idcurso } = useParams()

    const [capitulos, setCapitulos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true); // Iniciar estado de carga
                const response = await buscarContenidosDelCurso(idcurso);
                setCapitulos(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false); // Finalizar estado de carga
            }
        }
        fetch();
    }, []);

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
    ];

    const table = useReactTable({
        data: capitulos,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });


    // Gurdar el indice del objeto seleccionado
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    // Evento que inicializa al arrastrar el objeto
    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    // Evento que ocurre durante toda la interacccion de arrastrar, en este caso, previene que al momemnto de arrastrar
    // el objeto, se regrese automaticamente
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsHovering(true)
    };

    // Evento al soltar el objeto arrastrado
    const handleDrop = async (index) => {
        const formData = new FormData()
        formData.append('indexSeleccionado', draggedItemIndex)
        formData.append('indexInsertar', index)
        const response = await ordenarListaDeCapitulos(idcurso, formData)
        setContenido(response.data);
        setDraggedItemIndex(null);
        setIsHovering(false);
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-5xl p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Capitulo del curso</h3>
                    <button
                        onClick={() => navigate(`/admin/cursos/capitulos/${idcurso}`)}
                        className="flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
                        Agregar
                        <FaPlus className="ml-1" size={13} />
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
                                    draggable
                                    onDragStart={() => handleDragStart(index)}
                                    onDragOver={handleDragOver}
                                    onDrop={() => handleDrop(index)}
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
                                    <td className="px-4 py-2 text-center border border-gray-300">
                                        <button
                                            type='button'
                                            onClick={() => navigate(`${row.original._id}`)}
                                            className="text-blue-500 transition-colors hover:text-blue-600">

                                            <MdEditDocument size={20} />

                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => navigate(`${row.original._id}`)}
                                            className="text-red-500 transition-colors hover:text-red-600">
                                            <MdDeleteForever size={20} />
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


}

export default TablaCapituloCurso;
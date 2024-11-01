import React, { useEffect, useState } from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { obtenerSecciones } from '../../../Api/radio';


const TablaRadioSecciones = () => {

    // React Routes
    const navigate = useNavigate()

    // Secciones de la radio
    const [secciones, setSecciones] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerSecciones()
            setSecciones(response.data)
        }
        fetch()
    }, [])

    // Configuracion de la tabla
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('nombre', {
            header: "Nombre",
            cell: info => info.getValue(),
        }),
    ];

    const table = useReactTable({
        data: secciones,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-5xl p-6 rounded-lg shadow-lg bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Secciones</h3>
                        <button
                            onClick={() => navigate('agregar')}
                            className="flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
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
                                                className={`px-4 py-2 border border-gray-300`}
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
                                                className={`px-4 py-2 border border-gray-300`}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                        <td className="px-4 py-2 text-center border border-gray-300">
                                            <button
                                                type='button'
                                                onClick={() => EditarEvento(row.original._id)}
                                                className="text-blue-500 transition-colors hover:text-blue-600">
                                                editar
                                                {/* <MdEditDocument size={20} /> */}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TablaRadioSecciones
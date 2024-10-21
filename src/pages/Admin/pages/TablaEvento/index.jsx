import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useEffect, useState } from 'react';
import { obtenerEventos } from '../../../../Api/Events';

const TablaEvento = () => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerEventos()
            setEventos(response.data)
            console.log(response.data)
        }
        fetch()
    }, [])

    const columnHelper = createColumnHelper()

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
            header: "TITULO",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('ubicacion', {
            header: "Ubicación",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('fecha', {
            header: "Fecha",
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('hora', {
            header: "Hora",
            cell: info => info.getValue(),
        }),
    ]

    const table = useReactTable({
        data: eventos,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
<div className="p-4">
            <table className="min-w-full border border-collapse border-gray-300 table-auto">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-gray-200">
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
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                        <tr
                            key={row.id}
                            className={index % 2 === 0 ? "bg-white" : "bg-gray-100"} // Alterna colores de fila
                        >
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className={`px-4 py-2 border border-gray-300 ${cell.column.id === '_id' ? 'hidden' : ''}`}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className={`px-4 py-2 border border-gray-300 ${header.column.id === '_id' ? 'hidden' : ''}`}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
            <div className="h-4" />
            <button onClick={() => rerender()} className="px-4 py-2 text-white transition bg-red-400 rounded hover:bg-red-600">
                Rerender
            </button>
        </div>
    )
}

export default TablaEvento

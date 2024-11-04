import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { MdEditDocument, MdEditNote } from "react-icons/md";
import { FaPlus, FaLink } from "react-icons/fa";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { obtenerSeccionContenidos, obtenerSeccion } from "../../../Api/radio"

const TablaRadioSeccionContenidoAdmin = () => {

    const navigate = useNavigate()

    const { idseccion } = useParams()

    const [contenidos, setContenidos] = useState([])
    const [seccion, setSeccion] = useState("")

    useEffect(() => {
        const fetch = async () => {
            const response = await obtenerSeccionContenidos(idseccion)
            setContenidos(response.data)
        }
        fetch()
    }, [])

    useEffect(()=> {
        const fetch = async() => {
            const response = await obtenerSeccion(idseccion)
            setSeccion(response.data.nombre)
        }
        fetch()
    })

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('descripcion', {
            header: "Descripcion",
            cell: info => info.getValue(),
        }),
    ];

    const table = useReactTable({
        data: contenidos,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-5xl p-6 rounded-lg shadow-lg bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Contenido de {seccion}</h3>
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
                                        <td className="px-4 py-2 text-center border border-gray-300 w-20">
                                            <div className='w-full grid grid-cols-2 place-content-center'>
                                                <button
                                                    title='Modificar Seccion'
                                                    type='button'
                                                    onClick={() => navigate(`${row.original._id}`)}
                                                    className="text-blue-500 transition-colors hover:text-blue-600 flex justify-center">
                                                    <MdEditDocument size={20} className='fill-yellow-400' />
                                                </button>

                                            </div>
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

export default TablaRadioSeccionContenidoAdmin
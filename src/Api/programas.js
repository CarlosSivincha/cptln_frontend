import axios from "./axios";

export const crearPrograma = event => axios.post("programa",event)

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/categoria`,categoria)

export const obtenerInfoPrograma = (programaEspecifico) => axios.post(`programa/nombre`,programaEspecifico)

export const obtenerInfoProgramaContenido = (programaEspecifico) => axios.post(`programa/nombre/contenido`,programaEspecifico)

export const editarPrograma = (id, data) => axios.post(`programa/editar/${id}`,data)

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPagination = (params) => axios.get('programa/pagination', params)

export const buscarPrograma = (id) => axios.get(`programa/${id}`)


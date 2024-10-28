import axios from "./axios";

export const crearPrograma = event => axios.post("programa",event)

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/nombre`,categoria)

export const editarPrograma = (id, data) => axios.post(`programa/editar/${id}`,data)

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPagination = (params) => axios.get('programa/pagination', params)

export const buscarPrograma = (id) => axios.get(`programa/${id}`)


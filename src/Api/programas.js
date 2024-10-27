import axios from "./axios";

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPagination = (params) => axios.get('programa/pagination', params)

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/nombre`,categoria)

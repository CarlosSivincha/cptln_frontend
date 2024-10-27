import axios from "./axios";

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/nombre`,categoria)

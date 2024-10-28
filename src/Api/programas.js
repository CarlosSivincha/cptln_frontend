import axios from "./axios";

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/categoria`,categoria)

export const obtenerInfoPrograma = (programaEspecifico) => axios.post(`programa/nombre`,programaEspecifico)

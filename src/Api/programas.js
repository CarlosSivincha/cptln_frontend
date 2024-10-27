import axios from "./axios";

export const obtenerProgramas = () => axios.get("programa")
export const obtenerProgramasPagination = (parametros) => axios.get("programa/pagination",parametros)
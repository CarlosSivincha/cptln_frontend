import axios from "./axios";

export const registrarCurso = event => axios.post("cursos",event)

export const obtenerCurso = () => axios.get("cursos")

export const obtenerCursoID = (id) => axios.get(`cursos/${id}`)

export const EditarCurso =  (id, data) => axios.post(`cursos/${id}`,data)

export const obtenerCursoPag = (parametros) => axios.get("cursos/pagination",parametros)

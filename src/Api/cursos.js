import axios from "./axios";

export const registrarCurso = event => axios.post("cursos",event)

export const buscarContenidoDelCurso = (id) => axios.get(`/cursos/capitulos/capitulo/${id}`)

export const crearCapituloCurso = (id, data) => axios.post(`/cursos/capitulos/capitulo/${id}`,data)

export const obtenerCurso = () => axios.get("cursos")

export const obtenerCursoID = (id) => axios.get(`cursos/${id}`)

export const EditarCurso =  (id, data) => axios.post(`cursos/${id}`,data)

export const obtenerCursoPag = (parametros) => axios.get("cursos/pagination",parametros)

export const buscarCapituloEspecifico = (idcurso, id) => axios.get(`/cursos/capitulos/${idcurso}/${id}`)

export const editarCapituloCurso = (idcurso, id) => axios.post(`/cursos/capitulos/${idcurso}/${id}`)


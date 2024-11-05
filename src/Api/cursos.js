import axios from "./axios";


// Curso
export const registrarCurso = event => axios.post("cursos",event)

export const obtenerCurso = () => axios.get("cursos")

export const obtenerCursoID = (id) => axios.get(`cursos/${id}`)

export const EditarCurso =  (id, data) => axios.post(`cursos/${id}`,data)

export const obtenerCursoPag = (parametros) => axios.get("cursos/pagination",parametros)


// Contenido
export const crearCapituloCurso = (idcurso, data) => axios.post(`/cursos/capitulos/capitulo/${idcurso}`,data)

export const buscarContenidosDelCurso = (idcurso) => axios.get(`/cursos/capitulos/capitulo/${idcurso}`)

export const editarCapituloCurso = (idcurso, idcapitulo, data) => axios.post(`/cursos/capitulos/${idcurso}/${idcapitulo}`, data)

export const buscarCapituloEspecifico = (idcurso, id) => axios.get(`/cursos/capitulos/${idcurso}/${id}`)

export const obtenerCapitulosCursoPag = (idcurso, parametros) => axios.get(`/cursos/capitulos/pagination/${idcurso}`,parametros) 

export const ordenarListaDeCapitulos = (id, data) => axios.post(`/cursos/capitulos/ordenar/${id}`,data)
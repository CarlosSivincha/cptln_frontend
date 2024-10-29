import axios from "./axios";

export const crearPrograma = event => axios.post("programa",event)

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/categoria`,categoria)

export const obtenerInfoPrograma = (programaEspecifico) => axios.post(`programa/nombre`,programaEspecifico)


// export const obtenerContenidoPrograma = (id) => axios.post(`/programa/contenido/${id}`)

export const obtenerContenidoProgramaPagination = (id, params) => axios.get(`/programa/contenido/${id}`, params )

export const crearContenidoPrograma = (id, data) => axios.post(`/programa/contenido/${id}`,data )

export const obtenerInfoProgramaContenido = (programaEspecifico) => axios.post(`programa/nombre/contenido`,programaEspecifico)


export const editarPrograma = (id, data) => axios.post(`programa/editar/${id}`,data)

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasPagination = (params) => axios.get('programa/pagination', params)

export const buscarPrograma = (id) => axios.get(`programa/${id}`)


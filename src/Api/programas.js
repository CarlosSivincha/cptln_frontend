import axios from "./axios";

export const obtenerProgramasPorCategorias = (categoria) => axios.post(`programa/categoria`,categoria)

export const obtenerInfoPrograma = (programaEspecifico) => axios.post(`programa/nombre`,programaEspecifico)

export const obtenerInfoProgramaContenido = (programaEspecifico) => axios.post(`programa/nombre/contenido`,programaEspecifico)

export const obtenerProgramas = () => axios.get("programa")

export const obtenerProgramasCliente = () => axios.get("client/programa")

export const obtenerProgramasPagination = (params) => axios.get('programa/pagination', params)

export const obtenerContenidoProgramaPagination = (id, params) => axios.get(`/programa/contenido/pagination/${id}`, params )

export const buscarPrograma = (id) => axios.get(`programa/${id}`)

export const buscarProgramaContenido = (idprograma, id) => axios.get(`programa/contenido/${idprograma}/${id}`)

export const crearPrograma = event => axios.post("programa",event)

export const crearContenidoPrograma = (id, data) => axios.post(`/programa/contenido/${id}`,data )

export const editarPrograma = (id, data) => axios.post(`programa/editar/${id}`,data)

export const editarProgramaContenido = (idprograma, id, data) => axios.post(`programa/contenido/${idprograma}/${id}`,data)

export const ordenarListaDeContenido = (id, data) => axios.post(`/programa/contenido/ordenar/${id}`,data)
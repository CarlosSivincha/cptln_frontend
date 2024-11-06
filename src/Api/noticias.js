import axios from "./axios";


// Cliente
export const obtenerNoticia = ({limit}) => axios.get("noticias", {params: {limit}})

export const obtenerNoticiasPag = (parametros) => axios.get("noticias/pagination",parametros)

export const obtenerNoticiaID = (id) => axios.get(`noticias/${id}`)

export const obtenerNoticiasPrograma = ({programa_id}) => axios.get("noticias/programa",{params: {programa_id}})

// Admin
export const obtenerNoticiasPagAdmin = (parametros) => axios.get("noticias/pagination",parametros)

export const registrarNoticia = event => axios.post("noticias",event)

export const EditarNoticia =  (id, data) => axios.post(`noticias/${id}`,data)

export const EliminarNoticia = ({id}) => axios.post("noticias/delete",{},{params: {id}} )
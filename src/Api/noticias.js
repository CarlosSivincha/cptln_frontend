import axios from "./axios";

export const registrarNoticia = event => axios.post("noticias",event)

export const obtenerNoticia = () => axios.get("noticias")

export const obtenerNoticiaID = (id) => axios.get(`noticias/${id}`)

export const EditarNoticia =  (id, data) => axios.post(`noticias/${id}`,data)

export const obtenerNoticiasPag = (parametros) => axios.get("noticias/pagination",parametros)


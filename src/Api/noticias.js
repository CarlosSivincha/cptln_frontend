import axios from "./axios";

export const registrarNoticia = event => axios.post("noticias",event)

export const obtenerNoticia = ({limit}) => axios.get("noticias", {params: {limit}})

export const obtenerNoticiaID = (id) => axios.get(`noticias/${id}`)

export const EditarNoticia =  (id, data) => axios.post(`noticias/${id}`,data)

export const obtenerNoticiasPag = (parametros) => axios.get("noticias/pagination",parametros)

export const EliminarNoticia = ({id}) => axios.post("noticias/delete",{},{params: {id}} )
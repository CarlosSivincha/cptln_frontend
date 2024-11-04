import axios from "./axios";

export const registrarEvento = event => axios.post("eventos",event)

export const obtenerEventos = () => axios.get("eventos")

export const obtenerEventosID = (id) => axios.get(`eventos/${id}`)

export const EditarEventos =  (id, data) => axios.post(`eventos/${id}`,data)

export const obtenerEventosPag = (parametros) => axios.get("eventos/pagination",parametros)

export const EliminarEvento = ({id}) => axios.post("eventos/delete",{},{params: {id}} )

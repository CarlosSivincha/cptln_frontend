import axios from "./axios";

export const registrarDevo = devo => axios.post("devocionales",devo)

export const obtenerDevocional = () => axios.get("devocionales")

export const obtenerDevocionalHoy = () => axios.get("devocionales/hoy")

export const obtenerDevocionalID = (id) => axios.get(`devocionales/${id}`)

export const EditarDevocional =  (id, data) => axios.post(`devocionales/${id}`,data)

export const obtenerDevocionalPag = (parametros) => axios.get("devocionales/pagination",parametros)
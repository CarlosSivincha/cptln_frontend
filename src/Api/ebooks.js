import axios from "./axios";

export const registrarEbooks = event => axios.post("ebooks",event)

export const obtenerEbooks = () => axios.get("ebooks")

export const obtenerEbooksID = (id) => axios.get(`ebooks/${id}`)

export const EditarEbooks =  (id, data) => axios.post(`ebooks/${id}`,data)

export const obtenerEbooksPag = (parametros) => axios.get("ebooks/pagination",parametros)

export const EliminarEbooks = ({id}) => axios.post("ebooks/delete",{},{params: {id}} )

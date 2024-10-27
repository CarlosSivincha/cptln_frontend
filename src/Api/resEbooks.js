import axios from "./axios";

export const solicitudEbooks = devo => axios.post("solicitud-ebooks",devo)


export const obtenerEbooks = () => axios.get("solicitud-ebooks")

export const obtenerEbooksPag = (parametros) => axios.get("solicitud-ebooks/pagination",parametros)
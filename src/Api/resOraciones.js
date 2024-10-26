import axios from "./axios";

export const registrarOraciones = devo => axios.post("solicitud-oraciones",devo)


export const obtenerOraciones = () => axios.get("solicitud-oraciones")

export const obtenerOracionesPag = (parametros) => axios.get("solicitud-oraciones/pagination",parametros)
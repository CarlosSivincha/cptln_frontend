import axios from "./axios";

export const solicitudContactanos = devo => axios.post("solicitud-contactanos",devo)
export const obtenerContactanos = () => axios.get("solicitud-contactanos")
export const obtenerContactanosPag = (parametros) => axios.get("solicitud-contactanos/pagination",parametros)
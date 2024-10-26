import axios from "./axios";

export const solicitudEbooks = devo => axios.post("solicitud-ebooks",devo)


// export const obtenerOraciones = () => axios.get("solicitud-oraciones")

// export const obtenerOracionesPag = (parametros) => axios.get("solicitud-oraciones/pagination",parametros)
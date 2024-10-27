import axios from "./axios";

export const solicitudCursos = devo => axios.post("solicitud-cursos",devo)
export const obtenerSolicitudCursos = () => axios.get("solicitud-cursos")
export const obtenerCursosPag = (parametros) => axios.get("solicitud-cursos/pagination",parametros)
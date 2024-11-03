import axios from "./axios";

// Radio
export const obtenerDatosDeRadio = () => axios.get(`admin/radio`)
export const actualizarDatosDeRadio = (data) => axios.post(`admin/radio`, data)

// Secciones
export const obtenerSecciones = () => axios.get(`/admin/radio/secciones` )
export const agregarSeccion = (data) => axios.get(`/admin/radio/secciones`, data )
export const obtenerSeccion = (id) => axios.get(`/admin/radio/secciones/${id}` )
export const modificarSeccion = (id, data) => axios.get(`/admin/radio/secciones/${id}`, data)

// Contenido
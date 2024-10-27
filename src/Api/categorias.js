import axios from "./axios";

export const registrarCategoria = event => axios.post("categorias",event)

export const obtenerCategorias = () => axios.get("categorias")

export const obtenerCategoriasID = (id) => axios.get(`categorias/${id}`)

export const EditarCategorias =  (id, data) => axios.post(`categorias/${id}`,data)

export const BuscarCategoriaPorNombre =  (data) => axios.post(`categorias/nombre`,data)

export const obtenerCategoriasPag = (parametros) => axios.get("categorias/pagination",parametros)
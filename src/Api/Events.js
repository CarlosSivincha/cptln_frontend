import axios from "./axios";

export const registrarEvento = event => axios.post("eventos",event)

export const obtenerEventos = () => axios.get("eventos")
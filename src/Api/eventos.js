import axios from "./axios"

export const dataEventos = () => axios.get('eventos')
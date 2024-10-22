import axios from "./axios"

export const dataNoticias = () => axios.get('noticias')

export const dataNoticiaUnica = (_id) => axios.get(`noticias/${_id}`)
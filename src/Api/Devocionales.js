import axios from "./axios"

export const dataDevocionales = () => axios.get('devocionales')

export const dataNoticiaUnica = (_id) => axios.get(`devocioanal/${_id}`)

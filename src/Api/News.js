import axios from "./axios";

export const registrarNoticia = event => axios.post("noticias",event)
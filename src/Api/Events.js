import axios from "./axios";

export const registrarEvento = event => axios.post("eventos",event)
import axios from "./axios";

export const registrarDevo = devo => axios.post("devocionales",devo)
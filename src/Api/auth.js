import axios from "./axios"

export const obtenerUsuarios = () => axios.get("/admin/cptln/usuarios")
export const registrar = user => axios.post("register",user)
export const login = user => axios.post("login",user)
export const logout = (token) => axios.post("logout", token)
export const verifyTokenRequest = (token) => axios.post("verifytoken",token)
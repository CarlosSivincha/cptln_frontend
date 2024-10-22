import axios from "./axios"

export const registrar = user => axios.post("register",user)
export const login = user => axios.post("login",user)
export const verifyTokenRequest = token => axios.post("verify-token",token)
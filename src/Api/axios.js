import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers : {
        "bypass-tunnel-reminder": "PERMISOS",
    }
    // withCredentials: true
})
export default instance
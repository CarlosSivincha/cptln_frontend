import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers : {
        "ngrok-skip-browser-warning": "69420",
    }
    // withCredentials: true
})
export default instance
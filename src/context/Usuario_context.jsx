import { createContext, useContext, useState, useEffect } from "react";
import { login, registrar, verifyTokenRequest } from "../Api/auth";
import Cookies from 'js-cookie';

export const Usuario_context = createContext();

export const useAuth = () => {
    const context = useContext(Usuario_context);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = async (user) => {
        try {
            const response = await login(user)
            if (response.data.token) {
                Cookies.set('token', response.data.token, { expires: 7 });
                localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
                setUser(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const RegisterUser = async (user) => {
        try {
            const response = await registrar(user)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkLogin = async () => { // Obtiene el token directamente
            const token = localStorage.getItem('token');
            if (token) {
                Cookies.set('token', token);
            }
            try {
                const res = await verifyTokenRequest(token);
                if (res.data) {
                    setUser(res.data);
                }
            } catch (error) {
                console.error('Token verification error:', error);
            }
        };
        checkLogin();
    }, []);

    return (
        <Usuario_context.Provider value={{ user, loginUser, RegisterUser }} >
            {children}
        </Usuario_context.Provider>
    )
}
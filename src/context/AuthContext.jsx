import { createContext, useContext, useState, useEffect, useRef } from "react";
import { login, registrar, verifyTokenRequest, logout } from "../Api/auth";
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const location = useLocation()
    const navigate = useNavigate ()

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const loginUser = async (user) => {
        try {
            const res = await login(user); // Espera a que la promesa se resuelva
    
            // Ahora puedes verificar si el token está presente en la cookie
            navigate('admin/')
            
        } catch (error) {
            console.error('Error en el login:', error.message);
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

    const LogoutUser = async () => {
        try {
            const token = Cookies.get('token');
            const res = logout(token)
            if (res) {
                setIsAuthenticated(false)
                setUser(null)
                navigate('/')
            }
        } catch (error) {
            
        }
    }

    const checkLogin = async (token) => {
        try {
            const res = await verifyTokenRequest(token);
            if (!res.data) {
                setIsAuthenticated(false);
                setUser(null);
                return false;
            } else {
                setUser(res.data);
                setIsAuthenticated(true);
                return true;
            }
        } catch (error) {
            console.error('Token verification error:', error);
            setIsAuthenticated(false);
            setUser(null);
            return false;
        } finally {
            setLoading(false);
        }
    };


    const hasRedirected = useRef(false); // Usamos un ref para evitar redirecciones múltiples
    // Verificación inicial al cargar
    useEffect(() => {
        const initializeAuth = async () => {
            const token = Cookies.get('token');
            
            // Si no hay token y estamos en '/admin', redirigimos solo una vez
            if (!token && location.pathname.includes('/admin') && !hasRedirected.current) {
                hasRedirected.current = true; // Evitar redirección múltiples
                setIsAuthenticated(false);
                setLoading(false);
                navigate('/cptln/pe/admin/login');
                return;
            }
    
            // Si hay token, verificamos el login
            if (token) {
                await checkLogin(token);
            }
            setLoading(false);
        };
    
        initializeAuth();
    }, [location, navigate]);

    return (
        <AuthContext.Provider value={{ user, loginUser, RegisterUser, LogoutUser, isAuthenticated, loading }} >
            {children}
        </AuthContext.Provider>
    )
}
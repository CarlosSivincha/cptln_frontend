import OriginalLogo from "../../../../assets/OriginalLogo.png";
import { useState } from "react";
import { useAuth } from "../../../../context/Usuario_context";

export const LoginAdmin = () => {

  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  
  const handleCorreo = (event) => { 
    setCorreo(event.target.value)
  }

  const handleContraseña = (event) => { 
    setContraseña(event.target.value)
  }

  const {loginUser} = useAuth()

  const login = async(event) => {
    event.preventDefault()
    const formulario = new FormData()
    formulario.append("correo",correo)
    formulario.append("password",contraseña)
    try {
      const respuesta = await loginUser(formulario)
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAE9E5]">
      {/* Contenedor del formulario */}
      <div className="w-full max-w-md p-6 bg-[#65633F] rounded-lg shadow-lg lg:max-w-lg">
        {/* Interior del formulario */}
        <div className="p-8 bg-[#EAE9E5] rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={OriginalLogo}
              alt="Logo"
              className="w-16 h-16 sm:w-16 sm:h-16"
            />
          </div>

          {/* Formulario */}
          <form onSubmit={login}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 mb-4 bg-gray-100 rounded-md"
                required
                value={correo}
                onChange={handleCorreo}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full p-3 mb-4 bg-gray-100 rounded-md"
                required
                value={contraseña}
                onChange={handleContraseña}
              />
            </div>

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              className="w-full p-3 mt-4 text-white transition-all rounded-md bg-l_color_v-600 hover:bg-l_color_v-700"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginAdmin;

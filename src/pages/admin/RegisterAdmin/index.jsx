import { useState } from "react";
import OriginalLogo from "../../../../src/assets/OriginalLogo.png";
import { useAuth } from "../../../context/AuthContext";

export const RegisterAdmin = () => {

  const { RegisterUser, errorsAuth } = useAuth()

  // Formulario
  const [nombres, setNombre] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [confirmarContraseña, setConfirmarContraseña] = useState("")
  const [error, setError] = useState("") // Para manejar los errores de validación
  const [errorcorreo, setErrorcorreo] = useState("")

  const handleNombres = (event) => setNombre(event.target.value)
  const handleApellidos = (event) => setApellidos(event.target.value)
  const handleCorreo = (event) => setCorreo(event.target.value)
  const handleContraseña = (event) => setContraseña(event.target.value)


  const registrarUsuario = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('nombres', nombres)
    formData.append('apellidos', apellidos)
    formData.append('correo', correo)
    formData.append('password', contraseña)

    // Llamar a la función para registrar al usuario
      RegisterUser(formData)
      console.log(errorsAuth)
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
          <form onSubmit={registrarUsuario}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre"
                onChange={handleNombres}
                className="p-3 bg-gray-100 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                onChange={handleApellidos}
                className="p-3 bg-gray-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                onChange={handleCorreo}
                placeholder="Correo Electrónico"
                className="w-full p-3 bg-gray-100 rounded-md"
                required
              />
            </div>
            {errorsAuth && <p className="mb-4 text-sm text-red-500">{errorsAuth}</p>}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                onChange={handleContraseña}
                className="w-full p-3 bg-gray-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="w-full p-3 bg-gray-100 rounded-md"
                required
              />
            </div>


            {/* Botón de registro */}
            <button
              type="submit"
              className="w-full p-3 mt-4 text-white transition-all rounded-md bg-l_color_v-600 hover:bg-l_color_v-700"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;

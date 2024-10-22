import OriginalLogo from "../../../../src/assets/OriginalLogo.png";

export const RegisterAdmin = () => {
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
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre"
                className="p-3 bg-gray-100 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                className="p-3 bg-gray-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 bg-gray-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
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

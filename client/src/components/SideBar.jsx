import { useState } from "react";
import { Link } from "react-router-dom";

export function SideBar(props) {
    const [nav , setNav] = useState(false)

    const handleClick = () => {

    }
  return (
    <header className="flex justify-between text-center bg-blue-300 py-5">
      {props.user ? (
        <h2 className="w-[200px] text-2xl mx-5">Hola, {props.user}!</h2>
      ) : (
        <h2 className="w-[200px] text-2xl mx-6">Bienvenido!</h2>
      )}

      {/*Desktop nav*/}

      <nav className="hidden w-[500px] lg:block">
        <div>
          <Link to="/turnos" className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Turnos
          </Link>
          <Link to="/listado-turnos" className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Ver mis turnos
          </Link>
          <Link to="/config" className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Configuracion
          </Link>
        </div>
      </nav>
      <div className="hidden w-[220px] lg:block">
        {props.user ? (
          <Link className="text-lg mx-6 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Cerrar Sesion{" "}
          </Link>
        ) : (
          <Link className="text-lg mx-6 border-sky-600 hover:border-b-2">
            Entrar o Registrarse{" "}
          </Link>
        )}
      </div>

      {/*Movile nav*/}

      <nav className="lg:hidden">
        
      </nav>

    </header>
  );
}

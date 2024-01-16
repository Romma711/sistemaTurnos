import { useState } from "react";

export function SideBar(props) {
    const [nav , setNav] = useState(false)

    const handleClick () => {

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
          <button className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Turnos
          </button>
          <button className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Productos
          </button>
          <button className="text-lg mx-5 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Configuracion
          </button>
        </div>
      </nav>
      <div className="hidden w-[220px] lg:block">
        {props.user ? (
          <button className="text-lg mx-6 border-sky-600 hover:border-b-2 focus:border-b-2 ">
            Cerrar Sesion{" "}
          </button>
        ) : (
          <button className="text-lg mx-6 border-sky-600 hover:border-b-2">
            Entrar o Registrarse{" "}
          </button>
        )}
      </div>

      {/*Movile nav*/}

      <nav className="lg:hidden">
        
      </nav>

    </header>
  );
}

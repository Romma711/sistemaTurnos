import { Children } from "react";

export function SideBar(props) {
    return (
        <main className="flex flex-col">
            <nav className="flex items-center w-40 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
                <h2>Hola, {props.user}</h2>
                <ul>
                    <li><button>Turnos Disponibles</button></li>
                    <li><button>Mis Turnos</button></li>
                    <li><button>Configuracion de la Cuenta</button></li>
                    <li><button>Cerrar Sesion</button></li>
                </ul>
            </nav>
            <article>{props.children}</article>
        </main>
    )
}